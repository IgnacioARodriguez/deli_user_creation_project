import requests
import os


def read_html_template(file_path):
    with open(file_path, "r") as file:
        return file.read()

def confirmation_email_sender(username: str,):
	script_dir = os.path.dirname(os.path.realpath(__file__))
	html_template_path = os.path.join(script_dir, "confirmation_email_template.html")
	html_template = read_html_template(html_template_path)

	if html_template is None:
		return None

	html_template = html_template.replace("username", username)

	return requests.post(
		"https://api.mailgun.net/v3/sandbox4f0b8553d48a4af3a4e25af6e56c79ba.mailgun.org/messages",
		auth=("api", "6f312c280febfdcc73f8e7e93ca48b0e-8c90f339-ccc07b54"),
		data={"from": "Excited User <mailgun@sandbox4f0b8553d48a4af3a4e25af6e56c79ba.mailgun.org>",
			"to": ["igrodriguez.ar@gmail.com"],
			"subject": "Hello",
			"html": html_template})