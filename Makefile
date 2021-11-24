run:
	deno run --import-map=import_map.json --allow-net main.ts

build:
	deno compile --import-map=import_map.json -o main main.ts
