FROM python:3.11.0-slim-buster

WORKDIR /app
COPY requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . ./

ENV PYTHONUNBUFFERED=1
CMD ["python3", "manage.py", "makemigrations"]
CMD ["python3", "manage.py", "migrate"]
EXPOSE 8000