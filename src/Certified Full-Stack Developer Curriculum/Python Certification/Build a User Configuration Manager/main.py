test_settings = {
	"theme": "light",
	"language": "english",
	"notifications": "enabled",
}


def add_setting(settings, setting_pair):
	key, value = setting_pair
	key = str(key).lower()
	value = str(value).lower()

	if key in settings:
		return (
			f"Setting '{key}' already exists! Cannot add a new setting with this name."
		)

	settings[key] = value
	return f"Setting '{key}' added with value '{value}' successfully!"


def update_setting(settings, setting_pair):
	key, value = setting_pair
	key = str(key).lower()
	value = str(value).lower()

	if key not in settings:
		return f"Setting '{key}' does not exist! Cannot update a non-existing setting."

	settings[key] = value
	return f"Setting '{key}' updated to '{value}' successfully!"


def delete_setting(settings, key):
	key = str(key).lower()

	if key not in settings:
		return "Setting not found!"

	settings.pop(key)
	return f"Setting '{key}' deleted successfully!"


def view_settings(settings):
	if not settings:
		return "No settings available."

	lines = ["Current User Settings:"]
	for key, value in settings.items():
		lines.append(f"{key.capitalize()}: {value}")

	return "\n".join(lines) + "\n"
