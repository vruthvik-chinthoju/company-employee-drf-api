from django.http import HttpResponse,JsonResponse

def home(request):
    print("hoem page requested")
    friends = [
        'ankit',
        'ramesh',
        'suresh',
        'ganesh',
        'mohit',
    ]
    return JsonResponse(friends,safe=False)