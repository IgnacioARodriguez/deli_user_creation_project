import requests

def read_html_template(file_path):
    with open(file_path, "r") as file:
        return file.read()

def confirmation_email_sender():
	return requests.post(
		"https://api.mailgun.net/v3/sandbox4f0b8553d48a4af3a4e25af6e56c79ba.mailgun.org/messages",
		auth=("api", "6f312c280febfdcc73f8e7e93ca48b0e-8c90f339-ccc07b54"),
		data={"from": "Excited User <mailgun@sandbox4f0b8553d48a4af3a4e25af6e56c79ba.mailgun.org>",
			"to": ["igrodriguez.ar@gmail.com"],
			"subject": "Hello",
			"text": "Testing some Mailgun awesomeness!"})
