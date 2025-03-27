 // Fungsi untuk mengubah nama menjadi Capitalized Case
 function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

        // Data alumni 2022
        let dataSiswa = [
          {"No":1,"Nama":"AFLAKHA ZULFA FERNANDO","JK":"L"},
{"No":2,"Nama":"AHMAD DHANI PEDROZA","JK":"L"},
{"No":3,"Nama":"ALVEDZA JANUAR MAHENDRA DATA","JK":"L"},
{"No":4,"Nama":"ANGGA DENYARTA SYAHPUTRA","JK":"L"},
{"No":5,"Nama":"APRILIA EKA ROHMATUL LIKUMAH","JK":"P"},
{"No":6,"Nama":"ARIVA DWI ANGGRAYNI","JK":"P"},
{"No":7,"Nama":"CITRA PUTRI PERTIWI","JK":"P"},
{"No":8,"Nama":"DIANDRA FAREZA ADITYA","JK":"L"},
{"No":9,"Nama":"DILA PUSPITA SARI","JK":"P"},
{"No":10,"Nama":"EKA LEVINA MAHARANI","JK":"P"},
{"No":11,"Nama":"ELI YATUL ALDI","JK":"P"},
{"No":12,"Nama":"ELYASA RAHATIAWAN PUTRA PRATAMA","JK":"L"},
{"No":13,"Nama":"FARIKHATUL MUFAIDAH","JK":"P"},
{"No":14,"Nama":"KHARISMA NUR LAILY","JK":"P"},
{"No":15,"Nama":"KIKY AMELIA RAHMADHANI","JK":"P"},
{"No":16,"Nama":"M. HAIKAL ARIF","JK":"L"},
{"No":17,"Nama":"MOCH. FIDI YANTO","JK":"L"},
{"No":18,"Nama":"MOH. RAMADHAN ALFIRDAUS","JK":"L"},
{"No":19,"Nama":"MOHAMMAD KRISNA FEBRIAN","JK":"L"},
{"No":20,"Nama":"MUHAMMAD ASHRUL AQBIL MAULANA","JK":"L"},
{"No":21,"Nama":"MUHAMMAD HAYDAR ALI KHAN","JK":"L"},
{"No":22,"Nama":"MUTIARA ANJANI","JK":"P"},
{"No":23,"Nama":"PUJA WATI","JK":"P"},
{"No":24,"Nama":"REVA RISMAYA ULFA","JK":"P"},
{"No":25,"Nama":"REVA YULIA AGUSTINA","JK":"P"},
{"No":26,"Nama":"ROGER GOKLAS PANGARIBUAN","JK":"L"},
{"No":27,"Nama":"ROHMATUL HAJIJAH","JK":"P"},
{"No":28,"Nama":"SITI SA'BANIAH","JK":"P"},
{"No":29,"Nama":"SONY HARDY AZHARI","JK":"L"},
{"No":30,"Nama":"SURYA BRATA EKA WARSONO","JK":"L"},
{"No":31,"Nama":"VIRNI SALMA AULIYA","JK":"P"},
{"No":32,"Nama":"WIDYA PUTRI","JK":"P"},
{"No":33,"Nama":"WULAN RAHMA DANI","JK":"P"},
{"No":34,"Nama":"ZAINAB RIZKI ASADILLAH","JK":"P"},
{"No":35,"Nama":"ZE'FIN ADTYA PRADISTYO","JK":"L"},
{"No":36,"Nama":"ANDRE RAFAEL WIJAYA","JK":"L"},
{"No":37,"Nama":"ANJELLA ANGGRAINI","JK":"P"},
{"No":38,"Nama":"AULIYA NOVITA SARI","JK":"P"},
{"No":39,"Nama":"AZWA PRADANA JANUAR","JK":"L"},
{"No":40,"Nama":"BINTI SHOLIHATIN","JK":"P"},
{"No":41,"Nama":"DEVITA PUTRI YULIANA","JK":"P"},
{"No":42,"Nama":"DIAH APRILIANA","JK":"P"},
{"No":43,"Nama":"DIAH SOFATUL UMAH","JK":"P"},
{"No":44,"Nama":"EKA YOGIS PRATAMA PUTRA","JK":"L"},
{"No":45,"Nama":"ELOK NIRMALA DEVI","JK":"P"},
{"No":46,"Nama":"GITA PRAJUANDIRA","JK":"P"},
{"No":47,"Nama":"HUSNA MAULIDINA","JK":"P"},
{"No":48,"Nama":"IFANNO MEI RADITIYA","JK":"L"},
{"No":49,"Nama":"INTAN MAULIDA","JK":"P"},
{"No":50,"Nama":"KHANZA HUSNADZIRA","JK":"P"},
{"No":51,"Nama":"LINGGA PORMEI","JK":"P"},
{"No":52,"Nama":"M. IMAM RIFA'I","JK":"L"},
{"No":53,"Nama":"MOCHAMAD ARIFIN ILHAM","JK":"L"},
{"No":54,"Nama":"MOH. JAMUS GILANG ERLANGGA","JK":"L"},
{"No":55,"Nama":"MUHAMAD SHELLO CHANDRA WINATA","JK":"L"},
{"No":56,"Nama":"MUHAMMAD AGUNG FIRMANSYAH","JK":"L"},
{"No":57,"Nama":"MUHAMMAD FAHMI ANWA","JK":"L"},
{"No":58,"Nama":"MUHAMMAD ZAKARIA PUTRA","JK":"L"},
{"No":59,"Nama":"OCTAVINA DWI AYU NINGRUM","JK":"P"},
{"No":60,"Nama":"RAHMANDA KRISNA SURYA PERDANA","JK":"L"},
{"No":61,"Nama":"RANGGA CAHYA RAMADHANA","JK":"L"},
{"No":62,"Nama":"REONALDI AHMAD AL FAUZI","JK":"L"},
{"No":63,"Nama":"SELVIA PUTRI RAMADHANI","JK":"P"},
{"No":64,"Nama":"SHINTA ARINAL HIDAYAH","JK":"P"},
{"No":65,"Nama":"SINTA NUR SANIA","JK":"P"},
{"No":66,"Nama":"SITI ATIQOH","JK":"P"},
{"No":67,"Nama":"SITI MARYANA","JK":"P"},
{"No":68,"Nama":"TRI CANTIKA KARISMA PUTRI","JK":"P"},
{"No":69,"Nama":"TRIA REZA PRIADI NASRULLAH","JK":"L"},
{"No":70,"Nama":"ACHMAD VIAN DWI SUSANTO","JK":"L"},
{"No":71,"Nama":"AD'HA RAHMASARI ASHAR","JK":"P"},
{"No":72,"Nama":"AFRIDATUL QOIRUNISAK","JK":"P"},
{"No":73,"Nama":"AHMAD SAHRUL ALKHAFID","JK":"L"},
{"No":74,"Nama":"ANGGI SETYO BAGUS","JK":"L"},
{"No":75,"Nama":"ARDANA DWI KURNIAWAN","JK":"L"},
{"No":76,"Nama":"AURORA SHAFA KIRANI","JK":"P"},
{"No":77,"Nama":"BISMA FITER MARIO","JK":"L"},
{"No":78,"Nama":"DAVID NURDIANSYAH","JK":"L"},
{"No":79,"Nama":"EKA LUSIANA MAYANGSARI","JK":"P"},
{"No":80,"Nama":"FAZA NISAUL ULYA","JK":"P"},
{"No":81,"Nama":"HANA AMELIA PUTRI","JK":"P"},
{"No":82,"Nama":"INDI FITRIANI","JK":"P"},
{"No":83,"Nama":"LAELA HARTIKA SARI","JK":"P"},
{"No":84,"Nama":"M. RISAL ARROZAQ PRATAMA","JK":"L"},
{"No":85,"Nama":"MAYA BINTI NUR AISYAH","JK":"P"},
{"No":86,"Nama":"MIFTAHUL HUSNA","JK":"P"},
{"No":87,"Nama":"MUHAMMAD EGA EKA SAPUTRA","JK":"L"},
{"No":88,"Nama":"MU'JIZATUL AZIZAH","JK":"P"},
{"No":89,"Nama":"NABILA NURIL FAIZZAH","JK":"P"},
{"No":90,"Nama":"NADIA DEWI SRI FITRIANI","JK":"P"},
{"No":91,"Nama":"NAISHELA EKA YUHEPRI","JK":"P"},
{"No":92,"Nama":"NISWATUL IZZAH ZAHROQ","JK":"P"},
{"No":93,"Nama":"NUNGKI ASFIYAH","JK":"P"},
{"No":94,"Nama":"OKTA FIAN","JK":"L"},
{"No":95,"Nama":"PUTRA MAULANA SYIFA'","JK":"L"},
{"No":96,"Nama":"PUTRI EKA WULANDARI","JK":"P"},
{"No":97,"Nama":"RADYT ALEXSAMBEGA","JK":"L"},
{"No":98,"Nama":"RICKY NUR ALAMSYAH","JK":"L"},
{"No":99,"Nama":"RISDIANI MAHA DAYA CINTA","JK":"P"},
{"No":100,"Nama":"RIYAN ALDI SAPUTRA","JK":"L"},
{"No":101,"Nama":"SEPTIAN JERY PRATAMA","JK":"L"},
{"No":102,"Nama":"YAYUK ERNAWATI","JK":"P"},
{"No":103,"Nama":"ACHMAD SUGIARTO","JK":"L"},
{"No":104,"Nama":"ADIKA DWI RAFIANO","JK":"L"},
{"No":105,"Nama":"AHMAD ZAENAL ARIFIN","JK":"L"},
{"No":106,"Nama":"ALDI WAHYU AGUNG PRASTIYO","JK":"L"},
{"No":107,"Nama":"ALVINDRA FAREL LESMANA","JK":"L"},
{"No":108,"Nama":"AYU WULANDARI","JK":"P"},
{"No":109,"Nama":"DEVI ROSITA DWI YANTI","JK":"P"},
{"No":110,"Nama":"DITA NOVITASARI","JK":"P"},
{"No":111,"Nama":"ELSA OKTAVIA RAMADHANI","JK":"P"},
{"No":112,"Nama":"ENGELLITA RENADA AGUSTIN","JK":"P"},
{"No":113,"Nama":"FAREZA HUDAYA ROSYAD","JK":"L"},
{"No":114,"Nama":"FITRI DINDA ACIKA","JK":"P"},
{"No":115,"Nama":"HILDA RAHMA ANANTA","JK":"P"},
{"No":116,"Nama":"KANAYA AGNIA ZAHRA","JK":"P"},
{"No":117,"Nama":"M. DIO SATRIA PERMANA","JK":"L"},
{"No":118,"Nama":"MASYKARIN NI'MAH","JK":"P"},
{"No":119,"Nama":"MAYLINDA KHAFITHA FIIADINI","JK":"P"},
{"No":120,"Nama":"MOCH. MIRZA KURNIAWAN","JK":"L"},
{"No":121,"Nama":"MOH JATMIKO","JK":"L"},
{"No":122,"Nama":"MOHAMMAD FANANI","JK":"L"},
{"No":123,"Nama":"MOOHAMAD DEFFI ARDYANSAH","JK":"L"},
{"No":124,"Nama":"MUHAMMAD ABU BAKRIN","JK":"L"},
{"No":125,"Nama":"MUHAMMAD AFAN MAULANA","JK":"L"},
{"No":126,"Nama":"MUHAMMAD ASFA DAVY BYA RAMADHAN","JK":"L"},
{"No":127,"Nama":"MUKHAMAD MIFTACHUR ROHMAN","JK":"L"},
{"No":128,"Nama":"NADYA PUTRI AMELINDA","JK":"P"},
{"No":129,"Nama":"NILA MAFTUHATUL HASANAH","JK":"P"},
{"No":130,"Nama":"NOVA ELDYANA","JK":"P"},
{"No":131,"Nama":"NUR AULIA MURSYIDIN","JK":"L"},
{"No":132,"Nama":"PUTRI SAFIKA NOVITASARI","JK":"P"},
{"No":133,"Nama":"RINA AMALIA MAGFIROH","JK":"P"},
{"No":134,"Nama":"SELLY AGNESIA","JK":"P"},
{"No":135,"Nama":"VICA ANASTASYA YUNIAR","JK":"P"},
{"No":136,"Nama":"WAHYU RAHMAT NUR CAHYO","JK":"L"},
{"No":137,"Nama":"YUNAN FIRMANSYAH","JK":"L"},
{"No":138,"Nama":"YUSSROH ALFIKA AULLIA","JK":"P"},
{"No":139,"Nama":"AGUS SANTOSO","JK":"L"},
{"No":140,"Nama":"AHMAD HAFIZ RAFI'I","JK":"L"},
{"No":141,"Nama":"AHMAD TAUFIQURRAHMAN","JK":"L"},
{"No":142,"Nama":"AHMAD TEGAR TERRI FERNANDO","JK":"L"},
{"No":143,"Nama":"ANDIKA PASHA DWI PRADANA","JK":"L"},
{"No":144,"Nama":"ANGGUN DWIKA APRILIA GOZALI","JK":"P"},
{"No":145,"Nama":"ANIK SETIANINGSIH","JK":"P"},
{"No":146,"Nama":"APRELIA CAHYA MELANI","JK":"P"},
{"No":147,"Nama":"AVRILLIA AYU WARDANI","JK":"P"},
{"No":148,"Nama":"BARIK MILLATI","JK":"P"},
{"No":149,"Nama":"DANIEL IVON NOVIANI","JK":"P"},
{"No":150,"Nama":"DEVI PUTRIANA ANANDA NURHADI","JK":"P"},
{"No":151,"Nama":"DHANUS AZIZ MARENO","JK":"L"},
{"No":152,"Nama":"DWI AGASTA","JK":"L"},
{"No":153,"Nama":"ERVINA NURIL FAIZAH","JK":"P"},
{"No":154,"Nama":"HOLY ANGELA ADIANZAH","JK":"P"},
{"No":155,"Nama":"JIHAN VRISCA APRILIA","JK":"P"},
{"No":156,"Nama":"M. NESDI","JK":"L"},
{"No":157,"Nama":"MAHARDHIKA PUTRA ARYANTO","JK":"L"},
{"No":158,"Nama":"MAR'ATUS SALSA","JK":"P"},
{"No":159,"Nama":"M. PANDU PUTRA PRASETIYO","JK":"L"},
{"No":160,"Nama":"MOHAMAD ROBBY AL FATHI","JK":"L"},
{"No":161,"Nama":"MOHAMMAD RIZAL ARDIANSYAH","JK":"L"},
{"No":162,"Nama":"MOHAMMAD ROZIK AROHMAN","JK":"L"},
{"No":163,"Nama":"MUHAMMAD NOVAN DWI ARDHIKA","JK":"L"},
{"No":164,"Nama":"NABILLAH SABA' ALHAQ","JK":"P"},
{"No":165,"Nama":"NADIN CANDRA DWINATA","JK":"P"},
{"No":166,"Nama":"NADYA RAHMAWATI","JK":"P"},
{"No":167,"Nama":"NOVIANA SUSILO NINGRUM","JK":"P"},
{"No":168,"Nama":"RATNA LISTIANINGSIH","JK":"P"},
{"No":169,"Nama":"REDIKA SURYA SAPUTRA","JK":"L"},
{"No":170,"Nama":"RHESTA RAHMADHANI","JK":"P"},
{"No":171,"Nama":"RISKA MARDIANA OLIVIA","JK":"P"},
{"No":172,"Nama":"RIYAN DAWUD KHOIRI","JK":"L"},
{"No":173,"Nama":"SITI AYU WURYAN SWEDYAN SWERYAH","JK":"P"},
{"No":174,"Nama":"ZALDHI ULUMUDHIN MA'RUF","JK":"L"}
];

        // Hapus data duplikat berdasarkan nama
        dataSiswa = dataSiswa.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.Nama === item.Nama
            ))
        );

        // Ubah nama menjadi Capitalized Case
        dataSiswa = dataSiswa.map(siswa => ({ ...siswa, Nama: toTitleCase(siswa.Nama) }));

        // Elemen HTML
        const tableBody = document.getElementById('dataSiswa');
        const cardContainer = document.getElementById('cardSiswa'); //AKTIFKAN
        const paginationContainer = document.getElementById('paginationContainer');
        const searchInput = document.getElementById('searchSiswa');

        // Konfigurasi pagination
        const itemsPerPage = 30;
        let currentPage = 1;
        let filteredData = [];

        // Fungsi untuk menampilkan data pada halaman tertentu
        function displayData(page, searchQuery = '') {
            let dataToDisplay = dataSiswa; // Data default adalah semua siswa

            if (searchQuery) {
                const normalizedQuery = searchQuery.toLowerCase().trim();
                dataToDisplay = dataSiswa.filter(siswa => {
                    const normalizedName = siswa.Nama.toLowerCase();
                    return normalizedName.includes(normalizedQuery); //Hanya cari berdasarkan Nama
                });
            }
            filteredData = dataToDisplay;
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = dataToDisplay.slice(startIndex, endIndex);

            // Generate tabel
            generateTableRows(pageData);
            // Generate kartu (untuk mobile)
            generateCards(pageData); //AKTIFKAN

            // Update tombol pagination
            generatePaginationButtons(page, searchQuery);
        }

        // Fungsi untuk membuat baris tabel
        function generateTableRows(data) {
            const rows = data.map(alumni => `
                <tr class="siswa">
                    <td class="siswa" data-label="No">${alumni.No}</td>
                    <td class="siswa" data-label="Nama">${alumni.Nama}</td>
                    <td class="siswa" data-label="JK">${alumni.JK}</td>
                    <td class="siswa" data-label="Thn. Lulus"><span class="alumni-directory-lock">2022</span></td>
                    <td class="siswa" data-label="NIS"><span class="alumni-directory-lock">🔒</span></td>
                    <td class="siswa" data-label="SL"><span class="alumni-directory-lock">🔒</span></td>
                    <td class="siswa" data-label="Detail"><span class="alumni-directory-lock">🔒</span></td>
                </tr>
            `).join('');
            tableBody.innerHTML = rows;
        }

        // Fungsi untuk membuat kartu data
        function generateCards(data) {
            const cards = data.map(alumni => `
                <div class="siswa-card" aria-label="Kartu informasi alumni">
                    <div class="siswa-card-header"> Nama :  <span>${alumni.Nama}</span></div>
                    <div class="siswa-card-body">
                        <div class="siswa-card-row"><strong>JK:</strong> <span>${alumni.JK === 'L' ? 'Laki-laki' : 'Perempuan'}</span></div>
                        <div class="siswa-card-row"><strong>Thn. Lulus:</strong> <span><span class="alumni-directory-lock">2022</span></span></div>
                        <div class="siswa-card-row"><strong>NIS:</strong> <span><span class="alumni-directory-lock">🔒</span></span></div>
                        <div class="siswa-card-row"><strong>SL:</strong> <span><span class="alumni-directory-lock">🔒</span></span></div>
                        <div class="siswa-card-row"><strong>Detail:</strong> <span><span class="alumni-directory-lock">🔒</span></span></div>
                    </div>
                </div>
            `).join('');
            cardContainer.innerHTML = cards;
        }

        // Fungsi untuk membuat tombol pagination
        function generatePaginationButtons(activePage, searchQuery = '') {
            let totalPages;

            if (searchQuery) {
                totalPages = Math.ceil(filteredData.length / itemsPerPage);
            } else {
                totalPages = Math.ceil(dataSiswa.length / itemsPerPage);
            }

            let buttons = '';

            for (let i = 1; i <= totalPages; i++) {
                buttons += `
                    <button class="${i === activePage ? 'active' : ''}" onclick="displayData(${i}, '${searchQuery}')">${i}</button>
                `;
            }

            paginationContainer.innerHTML = buttons;
        }

        // function untuk mengaktifkan function displayData
        function performSearch() {
            const searchQuery = searchInput.value;
            displayData(1, searchQuery);
        }

        // Inisialisasi
        document.addEventListener('DOMContentLoaded', () => {
            displayData(currentPage);
        }); 
