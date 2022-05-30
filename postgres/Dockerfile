FROM postgres

COPY  ./mydb.sql /docker-entrypoint-initdb.d/mydb.sql

CMD [ "docker-entrypoint.sh", "postgres" ]