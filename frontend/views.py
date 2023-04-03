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
			gradientType = json_data.get('gradientType')
			input_val = json_data.get('userInput')

			# DA VINCI

			# prompt="Create a two-tone gradient using the word {}. Provide each hex code on a separate line. Provide a name for the gradient on a separate line and do not include the key 'name: '. Provide a description for why the name was chosen on a separate line and do not include the key 'description: '.".format(input_val),
			# prompt="Using the word {}, create a gradient with two colors. Provide each hex code on a separate line. Provide a unique name on a new line. Provide a description for why the colors were chosen on a new line".format(input_val),
			# prompt=("Create a two-tone gradient using the word {}."
			# 		"Provide each hex code."
			# 		"Provide a name for the gradient."
			# 		"Provide a description for why the colors were chosen."
			# 		"Your output should be formatted as a JSON object with the following keys and values: 'name' (string), 'hex1' (string), 'hex2' (string), and 'description' (string).".format(input_val))

			# Openai API
			# def run_openai_api(input_val):
			# 	response = openai.Completion.create(
			# 		model="text-davinci-003",
			# 		prompt=prompt,
			# 		temperature=0,
			# 		max_tokens=64,
			# 		top_p=1.0,
			# 		frequency_penalty=0.5,
			# 		presence_penalty=0.0,
			# 		stop=[";"]
			# 	)

			# 	API REQUIREMENTS
			# 	# Locate openai's response
			# 	response_text = response["choices"][0]["text"]

			# 	# Separate each response to a separate line
			# 	line = response_text.splitlines()

			# 	# Remove empty elements from returned list
			# 	line = [i for i in line if i.strip()]

			# 	# Remove extra text from each element. Returns as an array.
			# 	for i, element in enumerate(line):
			# 		if "Name: " in element:
			# 			line[i] = element.replace("Name: ", "")
			# 		elif "Description: " in element:
			# 			line[i] = element.replace("Description: ", "")
			# 		elif "description: " in element:
			# 			line[i] = element.replace("description: ", "")

			# 	# Create dictionary
			# 	gradient_dict = {
			# 		'hex1': line[0],
			# 		'hex2': line[1],
			# 		'name': line[2],
			# 		'description': line[3],
			# 	}

			# 	return gradient_dict

			# print(run_openai_api(input_val))
			# data = run_openai_api(input_val)

			# GPT 3.5 TURBO
			# Openai API
			if gradientType == 'two-tone':
				def run_openai_api(input_val):
					response = openai.ChatCompletion.create(
						model="gpt-3.5-turbo",
						messages = [
							{"role": "user", "content": f"Create a two-tone gradient using the word {input_val}. Provide each hex code. Provide a unique name for the gradient. Provide a description for why the colors were chosen and limit the description up to 180 characters. Your output should be formatted as a JSON object with the following keys and values: 'name' (string), 'hex1' (string), 'hex2' (string), and 'description' (string)."}
						]
						)

					# DALL E
					# response_image = openai.Image.create(
					# prompt='Jimmy Hendrix. Heavily incorporate the colors #FF7F00 and #FC1464 and #4B0082',
					# n=1,
					# size="1024x1024"
					# )
					# image_url = response_image['data'][0]['url']
					# print(response)

					response_message = response.choices[0].message.content
					output = json.loads(response_message)
					return output

				data = run_openai_api(input_val)
				print(data)

			elif gradientType == 'three-tone':
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