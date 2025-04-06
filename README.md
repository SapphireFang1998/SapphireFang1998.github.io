# Portfolio Website - Docker Setup

This repository contains a static HTML/CSS/JS portfolio website configured to run in a Docker container using Nginx as the web server.

## Overview

This portfolio website showcases your professional information.

By using Docker, you can run this website locally without installing any dependencies other than Docker itself.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Running the Website with Docker

1. **Clone this repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Open a terminal in that directory** and run:
    ```shellscript
    docker-compose build
    ```

    ```shellscript
    docker-compose up
    ```

3. **Access your website** by opening a browser and navigating to:
    ```plaintext
    http://localhost:8080
    ```

4. To stop the website, press `Ctrl+C` in the terminal, or run:
    ```shellscript
    docker-compose down
    ```

### Benefits of This Setup
- **No dependencies needed** except Docker itself
- **Instant development setup** on any machine with Docker installed
- **Portable** - works the same on Windows, macOS, or Linux
- **Changes reflect immediately** - the volume mapping means any changes to your HTML, CSS or JS files will be visible upon refreshing the browser
- **Isolated environment** - won't conflict with other software on your system

### Notes
- The site is served on port 8080 by default. You can change this in the docker-compose.yml file if needed.
- If you add more file types or directories, they'll automatically be available thanks to the volume mapping.
