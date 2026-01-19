#!/usr/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 Folder ComponentName"
    exit 1
fi

folder=$1
component=$2

mkdir -p "src/$folder/$component"
touch "src/$folder/$component/$component.tsx"
touch "src/$folder/$component/$component.css"

echo "Created component $component in folder $folder"
