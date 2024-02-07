import requests
import os
from dotenv import load_dotenv
from requests.models import Response

load_dotenv()


def read_html_template(file_path):
    with open(file_path, "r") as file:
        return file.read()

def confirmation_email_sender(username: str, email: str) -> Response | None:
	script_dir = os.path.dirname(os.path.realpath(__file__))
	html_template_path = os.path.join(script_dir, "confirmation_email_template.html")
	html_template = read_html_template(html_template_path)

	if html_template is None:
		return None

	html_template = html_template.replace("username", username)
      
	mailgun_domain = os.getenv("MAILGUN_DOMAIN").strip('"')
	mailgun_api_key = os.getenv("MAILGUN_API_KEY").strip('"')

	try:
		response = requests.post(
			f"https://api.mailgun.net/v3/{mailgun_domain}/messages",
			auth=("api", mailgun_api_key),
			data={"from": f"Excited User <mailgun@{mailgun_domain}>",
				"to": [email],
				"subject": "Registration Confirmed Deli",
				"html": html_template})

	except Exception as e:
		raise Exception(f'Error sending email: {e}')
      
	return response