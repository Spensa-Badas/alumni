        // Fungsi untuk mengubah nama menjadi Capitalized Case
        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

        // Data alumni 2023
        let dataSiswa = [
{"No":1,"Nama":"AFDHAL MUZAKKA ACHMAD","JK":"L"},
{"No":2,"Nama":"AHMAD BAGUS AS'ARI","JK":"L"},
{"No":3,"Nama":"AHMAD HUSNUL AMAL","JK":"L"},
{"No":4,"Nama":"ANDHIKA APRIL RIYAN","JK":"L"},
{"No":5,"Nama":"DELA NUR AINI","JK":"P"},
{"No":6,"Nama":"DEWI LESTARI","JK":"P"},
{"No":7,"Nama":"DHEA FRANSISKA RAFI","JK":"P"},
{"No":8,"Nama":"DHIVA AURA FIRDAUS","JK":"L"},
{"No":9,"Nama":"DHOIFUR MAULANA AZKIA","JK":"L"},
{"No":10,"Nama":"DIO PIAN MAULANA","JK":"L"},
{"No":11,"Nama":"DIPO MAHESA WIYONO PUTRA","JK":"L"},
{"No":12,"Nama":"FAREL ARDIO PUTRA","JK":"L"},
{"No":13,"Nama":"GALUH INDRYA KENCANA","JK":"P"},
{"No":14,"Nama":"HANIVA FIRDAUS","JK":"P"},
{"No":15,"Nama":"KENNYA AYU SINGKAPINKA","JK":"P"},
{"No":16,"Nama":"KHOLLILULLOH CHIZKIL AL ACHSIN","JK":"L"},
{"No":17,"Nama":"LIAN LUKFIA AYU","JK":"P"},
{"No":18,"Nama":"LUTFATUL MUARIFAH","JK":"P"},
{"No":19,"Nama":"MUHAMMAD ALVIAN HAKIM","JK":"L"},
{"No":20,"Nama":"MUHAMMAD ARIES","JK":"L"},
{"No":21,"Nama":"MUHAMMAD KEVIN SANJAYA SAPUTRO","JK":"L"},
{"No":22,"Nama":"MUHAMMAD RAFLI ALFARIZI","JK":"L"},
{"No":23,"Nama":"NADYLA CANDRA KIRANA","JK":"P"},
{"No":24,"Nama":"NAYLA PUTRI ANGGRAINI","JK":"P"},
{"No":25,"Nama":"RHADINDA ANJANI","JK":"P"},
{"No":26,"Nama":"RIDHO KURNIAWAN","JK":"L"},
{"No":27,"Nama":"RISKA FEBIYANTI","JK":"P"},
{"No":28,"Nama":"RISMA RAMDHANIA","JK":"P"},
{"No":29,"Nama":"SASTHA AMELIA","JK":"P"},
{"No":30,"Nama":"SEKAR TAQAMINGRUM PUTRI HAPSARI S.","JK":"P"},
{"No":31,"Nama":"SELVI NURAINI","JK":"P"},
{"No":32,"Nama":"SYAUQI MUHAMMAD","JK":"L"},
{"No":33,"Nama":"TRISTAN LYON YEHUDA","JK":"L"},
{"No":34,"Nama":"VIOLA ADINA RAFIF","JK":"P"},
{"No":35,"Nama":"ZUKE AVRIL BANYU PERMANA","JK":"L"},
{"No":36,"Nama":"AHMAD DEDY RIDWAN","JK":"L"},
{"No":37,"Nama":"AHMAD RIYAN","JK":"L"},
{"No":38,"Nama":"ALMA DIA AYUNING TYAS","JK":"P"},
{"No":39,"Nama":"CHELSI PUTRI LESTARI","JK":"P"},
{"No":40,"Nama":"CINDYANA SILVI","JK":"P"},
{"No":41,"Nama":"DIDID GALIH PAMBUDI","JK":"L"},
{"No":42,"Nama":"DIMAS TRI ZULIANTO","JK":"L"},
{"No":43,"Nama":"ECCA AULIA AGUSTINA","JK":"P"},
{"No":44,"Nama":"FARIKHAN IYA","JK":"P"},
{"No":45,"Nama":"FRANSISCA CHELSEA OLIVIA","JK":"P"},
{"No":46,"Nama":"FREDO MALIKI IRAWAN","JK":"L"},
{"No":47,"Nama":"GELAR RAMADHAN","JK":"L"},
{"No":48,"Nama":"HARUMI CITRA LESTARI","JK":"P"},
{"No":49,"Nama":"INES DWI APRILIA","JK":"P"},
{"No":50,"Nama":"JOE CHELLYN AURELYA","JK":"P"},
{"No":51,"Nama":"JUVENTIA VEDA LULU MOHAN","JK":"P"},
{"No":52,"Nama":"KEYSYA ZAHRA ANANTA PUTRI SETIA FIRDAUS","JK":"P"},
{"No":53,"Nama":"KHUSNUL KHOTIMAH","JK":"P"},
{"No":54,"Nama":"M THOHIR ALBAR SIDIQ","JK":"L"},
{"No":55,"Nama":"MARINA SALSA FEBRIANTI","JK":"P"},
{"No":56,"Nama":"MOH. ANWAR IBRAHIM","JK":"L"},
{"No":57,"Nama":"MOH. FARID ARDIYANSYAH","JK":"L"},
{"No":58,"Nama":"MOHAMAD GALIH REVAN FIRDAUS","JK":"L"},
{"No":59,"Nama":"MUH. SULTON","JK":"L"},
{"No":60,"Nama":"MUHAMMAD AGUS MAULANA","JK":"L"},
{"No":61,"Nama":"MUHAMMAD ALFIN RIZKI ASSYIFA","JK":"L"},
{"No":62,"Nama":"MUHAMMAD FRANDITO AL FARIZI","JK":"L"},
{"No":63,"Nama":"NABILA PUTRI KHARISMA","JK":"P"},
{"No":64,"Nama":"NAFI' TYAS CAHYANI","JK":"P"},
{"No":65,"Nama":"PANDU TRIJOYO WIJAKSONO","JK":"L"},
{"No":66,"Nama":"PUJI RAHAYU","JK":"P"},
{"No":67,"Nama":"RATIH AULIYA","JK":"P"},
{"No":68,"Nama":"RISALATUR MUAWANAH","JK":"P"},
{"No":69,"Nama":"ROBI SATRIA EFENDI","JK":"L"},
{"No":70,"Nama":"RONALDI ANDIKA","JK":"L"},
{"No":71,"Nama":"TAQIYA IQLIMA SYAHARANI CHOLIS","JK":"P"},
{"No":72,"Nama":"AHMAD DAVID ADRIANSYAH","JK":"L"},
{"No":73,"Nama":"AHMAD DESTYAN ANDWIKA","JK":"L"},
{"No":74,"Nama":"AHMAD FATKHUL MUBIN","JK":"L"},
{"No":75,"Nama":"AMELIA ERNISA SAFITRI","JK":"P"},
{"No":76,"Nama":"AUFA EKA OKTAVIANO","JK":"L"},
{"No":77,"Nama":"BAGUS KURNIAWAN","JK":"L"},
{"No":78,"Nama":"DE VANYA KARTIKA PUTRI","JK":"P"},
{"No":79,"Nama":"DEWINTA SEPTIANA PUTRI","JK":"P"},
{"No":80,"Nama":"DIMAS ANDREAS SAFA'AT","JK":"L"},
{"No":81,"Nama":"DINI ELISIA","JK":"P"},
{"No":82,"Nama":"ENI RAHMAWATI","JK":"P"},
{"No":83,"Nama":"FAJAR NOVIANTO","JK":"L"},
{"No":84,"Nama":"IMAM NUR KHAMID","JK":"L"},
{"No":85,"Nama":"IRSYAD PUTRA DASYATIA","JK":"L"},
{"No":86,"Nama":"LILIK NUR HAYATI","JK":"P"},
{"No":87,"Nama":"MOH FAHIM MAULUDIN","JK":"L"},
{"No":88,"Nama":"MOH. AZWIN FARHANI","JK":"L"},
{"No":89,"Nama":"MOH. ILHAM APRILIANSYAH","JK":"L"},
{"No":90,"Nama":"MOH. NISFU SA'BA","JK":"L"},
{"No":91,"Nama":"MUHAMMAD FAREL ARDIANSYAH","JK":"L"},
{"No":92,"Nama":"NADIA JUNITA ALYANNI","JK":"P"},
{"No":93,"Nama":"NANDA RAHMAWATI","JK":"P"},
{"No":94,"Nama":"NAYLA CESYLIA MAHARANI","JK":"P"},
{"No":95,"Nama":"NAYSILLA MAHARANI","JK":"P"},
{"No":96,"Nama":"RAIHAN SHARIFUDIN ANAUFAL","JK":"L"},
{"No":97,"Nama":"REVALINA FLORENSIA AULIA HIDAYAT","JK":"P"},
{"No":98,"Nama":"RICKY ADI HUTAMA","JK":"L"},
{"No":99,"Nama":"SERLY MARSELINA","JK":"P"},
{"No":100,"Nama":"SHERLY DWI KUMAIROH","JK":"P"},
{"No":101,"Nama":"SILVANI NUR NASANAH","JK":"P"},
{"No":102,"Nama":"TIARA SILVI RAHAYU","JK":"P"},
{"No":103,"Nama":"ULFA JULIANA SAPUTRI","JK":"P"},
{"No":104,"Nama":"VINDI VERINA PUTRI","JK":"P"},
{"No":105,"Nama":"YOGA PRATAMA","JK":"L"},
{"No":106,"Nama":"ZUMROTUL AF'IDAH AL MAKKI","JK":"P"},
{"No":107,"Nama":"ALLISYA TANIA DARSONO","JK":"P"},
{"No":108,"Nama":"ANGGUN AULIA DWI RAMADANI","JK":"P"},
{"No":109,"Nama":"APRILIA CINDI SAPUTRI","JK":"P"},
{"No":110,"Nama":"ARMA WIRA SAPUTRA","JK":"L"},
{"No":111,"Nama":"BUNGA CITRA FERNANDA","JK":"P"},
{"No":112,"Nama":"C. AZKA MUKTI PHYLARKO","JK":"L"},
{"No":113,"Nama":"CARISA NATALIA","JK":"P"},
{"No":114,"Nama":"DEBY MARIYANI","JK":"P"},
{"No":115,"Nama":"DELLA AVRILLYAN ASKASYA","JK":"P"},
{"No":116,"Nama":"DEWI LUSIANA WULAN","JK":"P"},
{"No":117,"Nama":"DIMAS TEGAR PRASETYO","JK":"L"},
{"No":118,"Nama":"ELISA PUTRI SANIYA","JK":"P"},
{"No":119,"Nama":"FAHRI OKY WILLIAM","JK":"L"},
{"No":120,"Nama":"FAJAR EVANDI","JK":"L"},
{"No":121,"Nama":"FIKA DWI OKTAFIA","JK":"P"},
{"No":122,"Nama":"GHEBY AYUNDA JINGGA LESTARI","JK":"P"},
{"No":123,"Nama":"GRACYLA CIDIELSYA ANUGRAH BAKTI","JK":"P"},
{"No":124,"Nama":"ISRAMA DANI","JK":"P"},
{"No":125,"Nama":"KEVIN ADI PUTRA RAMADAN","JK":"L"},
{"No":126,"Nama":"LAILATUL FITRIA","JK":"P"},
{"No":127,"Nama":"LEO ALFIAN ADE PERMANA","JK":"L"},
{"No":128,"Nama":"MIFTAHUL FAIZAH","JK":"P"},
{"No":129,"Nama":"MOH. RAHMAT SHOLIHUDIN","JK":"L"},
{"No":130,"Nama":"MOHAMMAD AS'ADUL IRSYADA","JK":"L"},
{"No":131,"Nama":"MUH LATIF TRIJAYA","JK":"L"},
{"No":132,"Nama":"MUH. FATKHUR ROZI","JK":"L"},
{"No":133,"Nama":"MUHAMMAD ALIMIN LAMINTO","JK":"L"},
{"No":134,"Nama":"MUHAMMAD HAKAM ASSIDDIQY","JK":"L"},
{"No":135,"Nama":"MUHAMMAD IMAM BUKHORI","JK":"L"},
{"No":136,"Nama":"PUTRI FEBRIAN WAHYU NURAINI","JK":"P"},
{"No":137,"Nama":"QISSY ARTIKA DEVI","JK":"P"},
{"No":138,"Nama":"RAHMAT NUR AFRIYANTO","JK":"L"},
{"No":139,"Nama":"ROBETH ALHAQ MUQTADA","JK":"L"},
{"No":140,"Nama":"SATRIA MAJID","JK":"L"},
{"No":141,"Nama":"SHILA NURMALUNA AZILA","JK":"P"},
{"No":142,"Nama":"VALENTINO ROSSI","JK":"L"},
{"No":143,"Nama":"AHMAD FARIDHO","JK":"L"},
{"No":144,"Nama":"ALA YATUL ALDI","JK":"P"},
{"No":145,"Nama":"ANISA FITRIA NORAFIDA","JK":"P"},
{"No":146,"Nama":"ANTHONY MAHENDRA PUTRA","JK":"L"},
{"No":147,"Nama":"ARI INDRA LESMANA","JK":"L"},
{"No":148,"Nama":"AYU DYAH ANGGUN ISNAINI","JK":"P"},
{"No":149,"Nama":"AYUDYA MUTIARA SEISYA","JK":"P"},
{"No":150,"Nama":"AZURA CAHYA PRATIWI","JK":"P"},
{"No":151,"Nama":"CHANTIKA SYIFAUN CHELSEA AURELIYA","JK":"P"},
{"No":152,"Nama":"DEA SETYONINGRUM","JK":"P"},
{"No":153,"Nama":"ERIS KRISTANTO","JK":"L"},
{"No":154,"Nama":"GALUH NURIL MAULIDA","JK":"P"},
{"No":155,"Nama":"HAIKAL SANDY KURNIAWAN","JK":"L"},
{"No":156,"Nama":"IMELIA BINTI KHUROTUL AINI","JK":"P"},
{"No":157,"Nama":"KESYA AURELIA","JK":"P"},
{"No":158,"Nama":"M. RISKI ANDITAMA","JK":"L"},
{"No":159,"Nama":"MEYLINDA DWI LESTARI","JK":"P"},
{"No":160,"Nama":"MOCHAMAD DIFA AL BUKHORI","JK":"L"},
{"No":161,"Nama":"MOHAMMAD FARID SAPUTRA","JK":"L"},
{"No":162,"Nama":"MOHAMMAD FARROS NAA SHIRUDDIN","JK":"L"},
{"No":163,"Nama":"MOHAMMAD UTAIBA SABAD HAIDAR","JK":"L"},
{"No":164,"Nama":"MUCHAMAD BAGAS PRATAMA SETIAWAN","JK":"L"},
{"No":165,"Nama":"MUHAMAD DANANG PRASETYO","JK":"L"},
{"No":166,"Nama":"MUHAMMAD ADIEB AWALUDDIN","JK":"L"},
{"No":167,"Nama":"MUHAMMAD FAHRI SYAIFUDDIN","JK":"L"},
{"No":168,"Nama":"MUHAMMAD IZZAT LUXMAN SYAH","JK":"L"},
{"No":169,"Nama":"MUHAMMAD RIDWAN PUTRA ANANTA","JK":"L"},
{"No":170,"Nama":"NURUL HIDAYAH","JK":"P"},
{"No":171,"Nama":"SAFIRA OLIVIA SALWA ZAHRO","JK":"P"},
{"No":172,"Nama":"SATRIA ALFIANO","JK":"L"},
{"No":173,"Nama":"SEFIANA ZULIA TAQWATIN","JK":"P"},
{"No":174,"Nama":"SHIVA NURMALIA ADILA","JK":"P"},
{"No":175,"Nama":"SUCI MAILANI","JK":"P"},
{"No":176,"Nama":"VITO MOHAMAD RIZKI","JK":"L"},
{"No":177,"Nama":"ZAHRA NUR AINI","JK":"P"},
{"No":178,"Nama":"ZAHRA ROZIKA PUTRI","JK":"P"}
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
                    <td class="siswa" data-label="Thn. Lulus"><span class="alumni-directory-lock">2023</span></td>
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
                        <div class="siswa-card-row"><strong>Thn. Lulus:</strong> <span><span class="alumni-directory-lock">2023</span></span></div>
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
  
