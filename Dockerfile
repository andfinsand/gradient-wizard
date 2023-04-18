# Pull official python base image
FROM python:3.9.5-slim-buster

# Set work directory
WORKDIR /backend

# prevent pip from
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
# prevent python from making pyc files
ENV PYTHONDONTWRITEBYTECODE 1
# prevent python from buffering stdout and stderr
ENV PYTHONUNBUFFERED 1
# Establish port for django run command to work properly
ENV PORT 8000

# Copy requirements.txt (for pip install) to the work directory
COPY requirements.txt .

# Install dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends nginx \
    && pip install --no-cache-dir -r requirements.txt \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# Copy django project into container
COPY . .

# Expose the port
EXPOSE $PORT

# Start the server
CMD python manage.py makemigrations; python manage.py migrate; python manage.py collectstatic --no-input; gunicorn --workers=2 -b 0.0.0.0:$PORT backend.wsgi
