run:
	deno run --import-map=import_map.json --allow-net src/main.ts

build:
	deno compile --import-map=import_map.json -o main src/main.ts

test:
	deno test --import-map=import_map.json src/
