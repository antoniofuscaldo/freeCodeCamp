class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if not self.check_funds(amount):
            return False

        self.ledger.append({"amount": -amount, "description": description})
        return True

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, category):
        if not self.check_funds(amount):
            return False

        self.withdraw(amount, f"Transfer to {category.name}")
        category.deposit(amount, f"Transfer from {self.name}")
        return True

    def check_funds(self, amount):
        return amount <= self.get_balance()

    def __str__(self):
        title = f"{self.name:*^30}"
        lines = [title]
        for item in self.ledger:
            description = item["description"][:23]
            amount = f"{item['amount']:>7.2f}"
            lines.append(f"{description:<23}{amount}")
        lines.append(f"Total: {self.get_balance():.2f}")
        return "\n".join(lines)


def create_spend_chart(categories):
    withdrawals = []
    for category in categories:
        spent = sum(-item["amount"] for item in category.ledger if item["amount"] < 0)
        withdrawals.append(spent)

    total_spent = sum(withdrawals)
    if total_spent == 0:
        percentages = [0 for _ in categories]
    else:
        percentages = [int((amount / total_spent) * 100) // 10 * 10 for amount in withdrawals]

    lines = ["Percentage spent by category"]
    for level in range(100, -1, -10):
        line = f"{level:>3}| "
        for percent in percentages:
            line += "o  " if percent >= level else "   "
        lines.append(line)

    lines.append("    " + "-" * (len(categories) * 3 + 1))

    max_len = max((len(category.name) for category in categories), default=0)
    for i in range(max_len):
        line = "     "
        for category in categories:
            char = category.name[i] if i < len(category.name) else " "
            line += f"{char}  "
        lines.append(line)

    return "\n".join(lines)