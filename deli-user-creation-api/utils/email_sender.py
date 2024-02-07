import requests
import os
from dotenv import load_dotenv

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

	print(mailgun_domain)
	print(mailgun_api_key)

	response = requests.post(
		f"https://api.mailgun.net/v3/{mailgun_domain}/messages",
		auth=("api", mailgun_api_key),
		data={"from": f"Excited User <mailgun@{mailgun_domain}>",
			"to": ["igrodriguez.ar@gmail.com"],
			"subject": "Registration Confirmed Deli",
			"html": html_template})
      
	print('MAIL RESPONSE', response)
      
	return response