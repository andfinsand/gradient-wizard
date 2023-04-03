from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from decouple import config
import json
import openai

class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'frontend/index.html')

class InputView(View):
	def post(self, request):
		csrf_token = request.META.get('HTTP_X_CSRFTOKEN')
		if csrf_token is None:
			return JsonResponse({'status': 'error', 'message': 'CSRF token not provided'}, status=400)

		openai.api_key = config('OPENAI_SECRET_KEY')

		if request.method == 'POST':
			json_data = json.loads(request.body)
			gradient_type = json_data.get('gradientType')
			input_val = json_data.get('userInput')

			# Openai API with GPT 3.5 TURBO
			if gradient_type == 'two-tone':
				def run_openai_api(input_val):
					response = openai.ChatCompletion.create(
						model="gpt-3.5-turbo",
						messages = [
							{"role": "user", "content": f"Create a two-tone gradient using the word {input_val}. Provide each hex code. Provide a unique name for the gradient. Provide a description for why the colors were chosen and limit the description up to 180 characters. Your output should be formatted as a JSON object with the following keys and values: 'name' (string), 'hex1' (string), 'hex2' (string), and 'description' (string)."}
						]
					)

					response_message = response.choices[0].message.content
					output = json.loads(response_message)
					return output

				data = run_openai_api(input_val)
				print(data)

			elif gradient_type == 'three-tone':
				def run_openai_api(input_val):
					response = openai.ChatCompletion.create(
						model="gpt-3.5-turbo",
						messages = [
							{"role": "user", "content": f"Create a three-tone gradient using the word {input_val}. Provide each hex code. Provide a unique name for the gradient. Provide a description for why the colors were chosen and limit the description up to 180 characters. Your output should be formatted as a JSON object with the following keys and values: 'name' (string), 'hex1' (string), 'hex2' (string), 'hex3' (string), and 'description' (string)."}
						]
						)

					response_message = response.choices[0].message.content
					output = json.loads(response_message)
					return output

				data = run_openai_api(input_val)
				print(data)

			if input_val:
				return JsonResponse(data, safe=False, status=201)
			else:
				return JsonResponse({'status': 'error', 'message': 'Name not provided'}, status=400)
		else:
			return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)
