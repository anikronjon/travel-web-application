FROM python:3.11-alpine

WORKDIR /app
COPY requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . ./

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
EXPOSE 8000