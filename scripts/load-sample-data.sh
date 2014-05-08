# Run this on PostgreSQL Database under username 'postgres'
# Make sure you are in the 'scripts' directory

# Don't attempt to run this script if you don't have access!!!
psql -d psql --host=in2indie-postgresql.cra1udraoqvn.us-west-2.rds.amazonaws.com --port=5432 --username=postgres --password --dbname=in2indieDB -f sample-data.sql
