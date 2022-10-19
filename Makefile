# Colors
RED = \033[1;31m
GREEN = \033[1;32m
YELLOW = \033[1;33m
BLUE = \033[1;34m
RESET = \033[0m

all: credit build

build:
	@echo "$(GREEN)█████████████████████████ Running db container ████████████████████████████$(RESET)"
	@docker stop postgres_db || true
	@docker rm postgres_db || true
	@docker pull postgres
	@docker run -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 --name postgres_db postgres
	@echo "$(GREEN)█████████████████████████ Building backend ████████████████████████████$(RESET)"
	@cd api; npm install
	@echo "$(BLUE)█████████████████████████ Building frontend ████████████████████████████$(RESET)"
	@cd src; npm install; npm run build

down:
	@echo "$(RED)█████████████████████████ Deleting db ████████████████████████████$(RESET)"
	@docker stop postgres_db || true
	@docker rm postgres_db ||true

credit:
	@echo "$(YELLOW)████████████████████████ Book Directory ███████████████████████████$(RESET)"