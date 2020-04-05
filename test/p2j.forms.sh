#!/usr/bin/env bash
STARTTIME=$(date +%s)
# AGENCIES=("dc" "de" "ef" "fd" "nd" "or" "pa" "sc" "va")
# for i in "${AGENCIES[@]}"
# do
# 	sh ./p2j.one.sh $i
# done

# Travis CI doesn't seem to support arrays in bash for testing. 
# Reverting to a bunch of commands so that build button can be shown.

sh ./p2j.one.sh va

ENDTIME=$(date +%s)
echo "It takes $(($ENDTIME - $STARTTIME)) seconds to process all PDFs ..."
