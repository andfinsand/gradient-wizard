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
			input_val = json_data.get('word')

			# Openai API
			def run_openai_api(input_val):
				response = openai.Completion.create(
					model="text-davinci-003",
					prompt="Create a two-tone gradient using the word {}. Provide each hex code on a separate line. Provide a name for the gradient on a separate line and do not include the key 'name: '. Provide a description for why the name was chosen on a separate line and do not include the key 'description: '.".format(input_val),
					temperature=0,
					max_tokens=64,
					top_p=1.0,
					frequency_penalty=0.0,
					presence_penalty=0.0,
					stop=[";"]
					)

				# Locate openai's response
				response_text = response["choices"][0]["text"]

				# Separate each response to a separate line
				line = response_text.splitlines()

				# Remove empty elements from returned list
				line = [i for i in line if i.strip()]

				# Remove extra text from each element. Returns as an array.
				for i, element in enumerate(line):
					if "Name: " in element:
						line[i] = element.replace("Name: ", "")
					elif "Description: " in element:
						line[i] = element.replace("Description: ", "")

				# Create dictionary
				gradient_dict = {
					'hex1': line[0],
					'hex2': line[1],
					'name': line[2],
					'description': line[3],
				}

				return gradient_dict

			print(run_openai_api(input_val))
			data = run_openai_api(input_val)

            # Testing
			# gradient_dict = {
            #     'hex1': '#00A2E8',
			# 	'hex2': '#003580',
			# 	'name': 'Ocean Depths',
			# 	'description': 'The two colors represent the light blue of the surface of the ocean and the deep blue of the depths.'
			# }

			# data = gradient_dict
			# print(gradient_dict)

			if input_val:
				return JsonResponse(data, safe=False, status=201)
			else:
				return JsonResponse({'status': 'error', 'message': 'Name not provided'}, status=400)
		else:
			return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)