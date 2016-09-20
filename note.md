# instaling grunt
grunt adalah javascipt task runner yang digunakan untuk menjalanlan tugas" js seperti watch dll
grunt dibuat dengan node js, pastikan node js sudah terinsatal

npm list                 = show node package list
npm -g update npm        = update node package manager
npm install -g grunt-cli = instaling grunt globaly

# membuat project baru
setup package.json = berisi tentang deskripsi dan package yang dipakai
setup gruntfile.js = berisi tast-tast yang akan dijalankan
npm install        = install project for firsttime, install package in json file
grunt              = running tast grunt

# mempersiapkan new project
tambahkan package yang ingin digunakan dalan package.json
dan gruntfile untuk membuat tugas

# tast documentation
buka npm untuk spesifik task, dan masukan task yang ingin dilakukan di gruntfile.js file

# default task
task yang running ketika kita running task "grunt"

# watch task
melihat task dan terus melihat apabila terjadi perubahan
