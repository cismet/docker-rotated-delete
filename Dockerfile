FROM python:3.8.6-alpine3.12

RUN apk update && apk add less
RUN pip install rotate-backups==8.1
RUN mkdir /data
COPY rotate-backups-in-data.sh /opt/rotate-backups-in-data.sh
RUN chmod +x /opt/rotate-backups-in-data.sh
ENTRYPOINT ["/opt/rotate-backups-in-data.sh"]
CMD ["--help"]
