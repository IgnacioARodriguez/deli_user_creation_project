import requests
from dotenv import load_dotenv
import os

load_dotenv()


def read_html_template(file_path):
    with open(file_path, "r") as file:
        return file.read()

def confirmation_email_sender(username: str, email: str):
	script_dir = os.path.dirname(os.path.realpath(__file__))
	html_template_path = os.path.join(script_dir, "confirmation_email_template.html")
	html_template = read_html_template(html_template_path)

	if html_template is None:
		return None

	html_template = html_template.replace("username", username)
      
	mailgun_domain = os.getenv("MAILGUN_DOMAIN")
	mailgun_api_key = os.getenv("MAILGUN_API_KEY")

	response = requests.post(
		"https://api.mailgun.net/v3/sandboxcfee8a226f4c46139a52ad41d02da14e.mailgun.org/messages",
		auth=("api", "24d8ca9dfe425832e343dba43ec3808f-8c90f339-f08faa0e"),
		data={"from": "Excited User <mailgun@sandboxcfee8a226f4c46139a52ad41d02da14e.mailgun.org>",
			"to": ["igrodriguez.ar@gmail.com"],
			"subject": "Registration Confirmed Deli",
			"html": html_template})
      
	print('MAIL RESPONSE', response)
      
	return response