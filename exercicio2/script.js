const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
console.log(`Total de caracteres da string: ${minhaString.length}
 + A estring sem os espaços ficou assim: ${minhaString.trim()}`)
 
 const novastring = minhaString.replace("________","sticioso")
 console.log(`Apos a substituição de ${minhaString}

 ficou assim: ${novastring}`)