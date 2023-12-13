docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog3-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog3-java/app ../../..
