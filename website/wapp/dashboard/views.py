from django.shortcuts import render

# Create your views here.

def index(request):
    context = {}
    return render(request, 'index.html', context)

def about(request):
    context = {}
    return render(request, 'about.html', context)

def contact(request):
    context = {}
    return render(request, 'contact.html', context)

def vcbank(request):
    context = {}
    return render(request, 'vcb.html', context)
