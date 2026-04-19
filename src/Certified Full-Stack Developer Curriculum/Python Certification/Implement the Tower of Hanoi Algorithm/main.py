def hanoi_solver(n):
	if n <= 0:
		return ""

	source = list(range(n, 0, -1))
	auxiliary = []
	destination = []
	moves = [f"{source} {auxiliary} {destination}"]

	def move_disks(count, start, end, spare):
		if count == 0:
			return
		move_disks(count - 1, start, spare, end)
		end.append(start.pop())
		moves.append(f"{source} {auxiliary} {destination}")
		move_disks(count - 1, spare, end, start)

	move_disks(n, source, destination, auxiliary)
	return "\n".join(moves)
