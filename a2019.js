     // Fungsi untuk mengubah nama menjadi Capitalized Case
        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

        // Data alumni 2019
        let dataSiswa = [
            { "No": 1, "Nama": "ADINDA OKTAVIANA", "JK": "P" },
            { "No": 2, "Nama": "AHMAD NOER FAIZUL", "JK": "L" },
            { "No": 3, "Nama": "AHMAD SYAIFUDIN", "JK": "L" },
            { "No": 4, "Nama": "ALFI NUR JANNAH", "JK": "P" },
            { "No": 5, "Nama": "ALMUSAWA FERDIANSAH", "JK": "L" },
            { "No": 6, "Nama": "ARNELISA DAMAYANTI", "JK": "P" },
            { "No": 7, "Nama": "BAMBANG HARTONO", "JK": "L" },
            { "No": 8, "Nama": "DEFTA DAVA WARDANA", "JK": "L" },
            { "No": 9, "Nama": "DINA KUSUMA WARDANI", "JK": "P" },
            { "No": 10, "Nama": "DINI NOVITA SARI", "JK": "P" },
            { "No": 11, "Nama": "EFFORTA AULIA RAYYAN", "JK": "L" },
            { "No": 12, "Nama": "FATKHIYATUL FAIZAH", "JK": "P" },
            { "No": 13, "Nama": "FICA SEPTIANI", "JK": "P" },
            { "No": 14, "Nama": "FINDI NOVA AULIA", "JK": "P" },
            { "No": 15, "Nama": "FITDIYATUL MUKAROMAH. A.T.", "JK": "P" },
            { "No": 16, "Nama": "JIHAN ABIDAH", "JK": "P" },
            { "No": 17, "Nama": "KEVIN MAULANA IBRAHIM", "JK": "L" },
            { "No": 18, "Nama": "KRISTINA PUTRI MUMPUNI", "JK": "P" },
            { "No": 19, "Nama": "LILI ANGGRAINI", "JK": "P" },
            { "No": 20, "Nama": "LINGGAR ATSIRUDIN ERLANGGA", "JK": "L" },
            { "No": 21, "Nama": "M. NIZAR KURNIAWAN HAKIM", "JK": "L" },
            { "No": 22, "Nama": "MIKHO ARISANDO", "JK": "L" },
            { "No": 23, "Nama": "MOCHAMAD NURYASIN", "JK": "L" },
            { "No": 24, "Nama": "MUHAMMAD DUVE WIBOWO", "JK": "L" },
            { "No": 25, "Nama": "NAZAMUDIN ADZAN", "JK": "L" },
            { "No": 26, "Nama": "NOER ROHMAN", "JK": "L" },
            { "No": 27, "Nama": "NUR FITRI RAMADANI", "JK": "P" },
            { "No": 28, "Nama": "NUR WULAN APRILIA", "JK": "P" },
            { "No": 29, "Nama": "NUZUL IRSYAD ROHMATULLOH", "JK": "L" },
            { "No": 30, "Nama": "OCTAVIANO UBAIDULLAH FAQIHUDIN", "JK": "L" },
            { "No": 31, "Nama": "PRIANKA WIDYA PURBAYUN", "JK": "P" },
            { "No": 32, "Nama": "PUTRI AYU AMELIA", "JK": "P" },
            { "No": 33, "Nama": "ROHMA KURNIA LAIL", "JK": "P" },
            { "No": 34, "Nama": "ROSALIA HENANDA", "JK": "P" },
            { "No": 35, "Nama": "RUKMA NATINA", "JK": "P" },
            { "No": 36, "Nama": "TINI AGUSTINA", "JK": "P" },
            { "No": 37, "Nama": "WIDYANDINI NADIA PRAMESTI", "JK": "P" },
            { "No": 38, "Nama": "ZOGA DINATA", "JK": "L" },
            { "No": 39, "Nama": "ZULI PRASTIYO", "JK": "L" },
            { "No": 40, "Nama": "ACHMAD FARIAL HUSSEIN", "JK": "L" },
            { "No": 41, "Nama": "ANANDA SILVI OKTAFIANI", "JK": "P" },
            { "No": 42, "Nama": "ANTON KURNIAWAN", "JK": "L" },
            { "No": 43, "Nama": "ARTIKA NOVIA HAMIDA", "JK": "P" },
            { "No": 44, "Nama": "AULIA NATASHA", "JK": "P" },
            { "No": 45, "Nama": "EKA WAHYU WULANDARI", "JK": "P" },
            { "No": 46, "Nama": "FATWA ARREVI", "JK": "P" },
            { "No": 47, "Nama": "FITRI NUR FADHILLAH", "JK": "P" },
            { "No": 48, "Nama": "GALOH OKTA SRI PURDIANTI", "JK": "P" },
            { "No": 49, "Nama": "HANIK SUSANTI", "JK": "P" },
            { "No": 50, "Nama": "IMROK'ATUS SHOLIHAH", "JK": "P" },
            { "No": 51, "Nama": "IQBAL IBNU UBAIDDULLOH", "JK": "L" },
            { "No": 52, "Nama": "KENNYVO EIZLAND FAJRI", "JK": "L" },
            { "No": 53, "Nama": "IQBAL KURNIAWAN ARDINATA", "JK": "L" },
            { "No": 54, "Nama": "KHURNIA RISKY WULANDARI", "JK": "P" },
            { "No": 55, "Nama": "LENY AULIA", "JK": "P" },
            { "No": 56, "Nama": "SABIQ NASOIKHUL IBAD", "JK": "L" },
            { "No": 57, "Nama": "MAULANA RHEYZAL FIRMANSYAH", "JK": "L" },
            { "No": 58, "Nama": "MIDA LAILI HIDAYAH", "JK": "P" },
            { "No": 59, "Nama": "MUHAMMAD 'ADIIMUNNAZHIIR", "JK": "L" },
            { "No": 60, "Nama": "MUHAMMAD FAJAR ANDREAN", "JK": "L" },
            { "No": 61, "Nama": "MUHAMMAD RIZKY NURHIDAYAT", "JK": "L" },
            { "No": 62, "Nama": "NIKMATUL SALASA", "JK": "P" },
            { "No": 63, "Nama": "NUZULUL MAGHFIROH", "JK": "P" },
            { "No": 64, "Nama": "RAFLY LINGGA ARYANTO", "JK": "L" },
            { "No": 65, "Nama": "RIZKY ALFITO DHEAN ARIESIA", "JK": "L" },
            { "No": 66, "Nama": "RIZKY OKTAVIAN", "JK": "L" },
            { "No": 67, "Nama": "SITA VIDITYA SARI", "JK": "P" },
            { "No": 68, "Nama": "SITANGSU", "JK": "P" },
            { "No": 69, "Nama": "TASYA INDAH MARDWIYANTI", "JK": "P" },
            { "No": 70, "Nama": "TRIA NURISMA AGUSTIN", "JK": "P" },
            { "No": 71, "Nama": "VIRGINIA ZAHWA RAHMATIZZA", "JK": "P" },
            { "No": 72, "Nama": "WIDHIANTORO", "JK": "L" },
            { "No": 73, "Nama": "WINDAH SARI", "JK": "P" },
            { "No": 74, "Nama": "YESI FEBRIANTI", "JK": "P" },
            { "No": 75, "Nama": "YOGA ADE PRATAMA", "JK": "L" },
            { "No": 76, "Nama": "DARRYL RAFLI DHARMAWAN", "JK": "L" },
            { "No": 77, "Nama": "AHMAD ALFIAN FUADI", "JK": "L" },
            { "No": 78, "Nama": "AKBAR MAULANA MUHAMMAD", "JK": "L" },
            { "No": 79, "Nama": "ALFINA FATMA ZAHRO", "JK": "P" },
            { "No": 80, "Nama": "ANGALICA KHUIRUL NISA", "JK": "P" },
            { "No": 81, "Nama": "ARI SOHIBUL NGIZAR", "JK": "L" },
            { "No": 82, "Nama": "AULIA RAHMA FADILAH", "JK": "P" },
            { "No": 83, "Nama": "CHILMIYAH TRI AGUSTIANA", "JK": "P" },
            { "No": 84, "Nama": "DANELA ELISABHET", "JK": "P" },
            { "No": 85, "Nama": "DANISA TIMUR ALYASARI", "JK": "P" },
            { "No": 86, "Nama": "DANY VEMBRIYONNICO", "JK": "L" },
            { "No": 87, "Nama": "DIAN FEBRIANI", "JK": "P" },
            { "No": 88, "Nama": "DIAN MYLANY FRANSISCA", "JK": "P" },
            { "No": 89, "Nama": "DIMAS FAZA AL FIRDAUS", "JK": "L" },
            { "No": 90, "Nama": "DINDA PUJI RAHAYU", "JK": "P" },
            { "No": 91, "Nama": "DOFIATUL MUSAROFAH", "JK": "P" },
            { "No": 92, "Nama": "DWI APRILIA", "JK": "P" },
            { "No": 93, "Nama": "EKO SETYAWAN", "JK": "L" },
            { "No": 94, "Nama": "EVITA MAHARANI", "JK": "P" },
            { "No": 95, "Nama": "FATWA ARRIVA", "JK": "P" },
            { "No": 96, "Nama": "FITRA AKBAR DEVA PRASETYO", "JK": "L" },
            { "No": 97, "Nama": "FRANS ABDI KURNIAWAN", "JK": "L" },
            { "No": 98, "Nama": "IQBAL RAIHAN NAJIB", "JK": "L" },
            { "No": 99, "Nama": "IVAN MAULANA FARISQI", "JK": "L" },
            { "No": 100, "Nama": "JEHUDA ALEXANDER MARTINO", "JK": "L" },
            { "No": 101, "Nama": "JUWA AYU PUSPITA SARI", "JK": "P" },
            { "No": 102, "Nama": "KHOLIDATUL FITRIANI", "JK": "P" },
            { "No": 103, "Nama": "M. ALFATH BINTARFI", "JK": "L" },
            { "No": 104, "Nama": "MARLENA", "JK": "P" },
            { "No": 105, "Nama": "MAWAR SETYORINI", "JK": "P" },
            { "No": 106, "Nama": "MUHAMMAD NICO KUZAIRI", "JK": "L" },
            { "No": 107, "Nama": "NADILLA WULANDARI", "JK": "P" },
            { "No": 108, "Nama": "NUR FARIDA", "JK": "P" },
            { "No": 109, "Nama": "PUTRI NAWANG SARI", "JK": "P" },
            { "No": 110, "Nama": "RAMASTA WISNU PRADANA", "JK": "L" },
            { "No": 111, "Nama": "RIRIS DIAN PUSPITA", "JK": "P" },
            { "No": 112, "Nama": "SIMA RINDIANI", "JK": "P" },
            { "No": 113, "Nama": "SITI MUNAWAROH", "JK": "P" },
            { "No": 114, "Nama": "TSALATSA ZAHRA ELQOROBAH", "JK": "P" },
            { "No": 115, "Nama": "VISCO TEGUH HIDAYATULLOH", "JK": "L" },
            { "No": 116, "Nama": "EKA PRASETIO", "JK": "L" },
            { "No": 117, "Nama": "AMELIA PUTRI MAHARANI", "JK": "P" },
            { "No": 118, "Nama": "ANITA ROHMAWATI", "JK": "P" },
            { "No": 119, "Nama": "BUSRO SHIHABUDIN", "JK": "L" },
            { "No": 120, "Nama": "CANDRA HIDAYAH", "JK": "L" },
            { "No": 121, "Nama": "DEVINTA ULFIA NANDA", "JK": "P" },
            { "No": 122, "Nama": "ELZY SOFYANA ZAINI PUTRI", "JK": "P" },
            { "No": 123, "Nama": "FAIZAL RANDY SAHPUTRA", "JK": "L" },
            { "No": 124, "Nama": "FERDI MAULANA", "JK": "L" },
            { "No": 125, "Nama": "FIRDA DWI AYUNENGTYAS", "JK": "P" },
            { "No": 126, "Nama": "FIRMA AZZAM", "JK": "L" },
            { "No": 127, "Nama": "FITRIAN NOVARDA HUSNALIZAMA", "JK": "L" },
            { "No": 128, "Nama": "GEMA NISMARA JULESTA", "JK": "P" },
            { "No": 129, "Nama": "HAMDAN ISA MAULANA", "JK": "L" },
            { "No": 130, "Nama": "IZZA SAFIRA RAHMADANI ZULKARNAIN", "JK": "P" },
            { "No": 131, "Nama": "JESI NADELLA", "JK": "P" },
            { "No": 132, "Nama": "LAELATUZ ZAHRO", "JK": "P" },
            { "No": 133, "Nama": "MIKAIL RIZAL UTAMA", "JK": "L" },
            { "No": 134, "Nama": "MITHA ANGGRAINI", "JK": "P" },
            { "No": 135, "Nama": "MOCHAMAD ALFIAN PRIMA UTAMA", "JK": "L" },
            { "No": 136, "Nama": "NADIA ISMA SALSABELLA", "JK": "P" },
            { "No": 137, "Nama": "NISKA APRILIA SARI", "JK": "P" },
            { "No": 138, "Nama": "NUR FARIDA", "JK": "P" },
            { "No": 139, "Nama": "PRIYO PUJI WIJAYA", "JK": "L" },
            { "No": 140, "Nama": "PUTRI AYUN SARI", "JK": "P" },
            { "No": 141, "Nama": "RAYHA RICI SAIFUDIN", "JK": "P" },
            { "No": 142, "Nama": "REFI ILHAM AUWALLYDA", "JK": "L" },
            { "No": 143, "Nama": "RIKI ANDRIANSYAH", "JK": "L" },
            { "No": 144, "Nama": "RIO YUDIS TIONO PUTRO", "JK": "L" },
            { "No": 145, "Nama": "RISA NOVIANTI", "JK": "P" },
            { "No": 146, "Nama": "RISMA PRAMUDITA", "JK": "P" },
            { "No": 147, "Nama": "RISNA AHMAD NURAINI", "JK": "P" },
            { "No": 148, "Nama": "SINTA NURIA", "JK": "P" },
            { "No": 149, "Nama": "SRI UTAMI", "JK": "P" },
            { "No": 150, "Nama": "SYAHRUL FATAH", "JK": "L" },
            { "No": 151, "Nama": "TAUFIQ HIDAYATULLAH", "JK": "L" },
            { "No": 152, "Nama": "TENY ESTRI JIWANING UTAMI", "JK": "P" },
            { "No": 153, "Nama": "VONDA ELMA AULIA", "JK": "P" },
            { "No": 154, "Nama": "WAHYU ALFIN SA'ADA", "JK": "P" },
            { "No": 155, "Nama": "YOGI ADI PRADANA", "JK": "L" },
            { "No": 156, "Nama": "RINJANI DWI PRATIWI", "JK": "P" },
            { "No": 157, "Nama": "NENSI NORISTA", "JK": "P" },
            { "No": 158, "Nama": "CHUSNUN NISAK", "JK": "P" },
            { "No": 159, "Nama": "MEYICA FAJAR DAMAYANTI", "JK": "P" },
            { "No": 160, "Nama": "ANGGA BRIAN RANDIKA", "JK": "L" },
            { "No": 161, "Nama": "DINDA YESSIKA PARAMITA", "JK": "P" },
            { "No": 162, "Nama": "MUHAMMAD SEVA ILYASA", "JK": "L" },
            { "No": 163, "Nama": "ACHMAD BAYU AJI", "JK": "L" },
            { "No": 164, "Nama": "MUDDRIKA DEWI AGUSTIA", "JK": "P" },
            { "No": 165, "Nama": "ROSALINA MOHAMAD", "JK": "P" },
            { "No": 166, "Nama": "MIRTA ARTIKA ZARA", "JK": "P" },
            { "No": 167, "Nama": "M. KHOIRUL HANI", "JK": "L" },
            { "No": 168, "Nama": "M. ROBBY AR ROBETS", "JK": "L" },
            { "No": 169, "Nama": "ARIEL RAMADHANI", "JK": "L" },
            { "No": 170, "Nama": "ALFIN LAM IQBAL", "JK": "L" },
            { "No": 171, "Nama": "VANES ANGGA SAPUTRA", "JK": "L" },
            { "No": 172, "Nama": "YUNUS ABDUL ROZAK", "JK": "L" },
            { "No": 173, "Nama": "DEWI NAWANG SARI", "JK": "P" },
            { "No": 174, "Nama": "MUHAMMAD ANDRIAN MAULANA", "JK": "L" },
            { "No": 175, "Nama": "EKA MIA MARISCHA", "JK": "P" },
            { "No": 176, "Nama": "YONATAN SYALOM OTNIEL", "JK": "L" },
            { "No": 177, "Nama": "AMELIA YASINTA MELADI", "JK": "P" },
            { "No": 178, "Nama": "AGUNG NUGROHO WICAKSONO", "JK": "L" },
            { "No": 179, "Nama": "INDRA RAMADHAN", "JK": "L" },
            { "No": 180, "Nama": "TONI MAULANA", "JK": "L" },
            { "No": 181, "Nama": "VIONA DWI PUTRI RAHMAWATI", "JK": "P" },
            { "No": 182, "Nama": "TONY ARDIANSYAH", "JK": "L" },
            { "No": 183, "Nama": "ANANDA MIKO PANGESTU", "JK": "L" },
            { "No": 184, "Nama": "KEFIN BAGAS ANDRIANSAH", "JK": "L" },
            { "No": 185, "Nama": "THERY KUSUMA WARDANI", "JK": "P" },
            { "No": 186, "Nama": "ANTON DWI SAPUTRO", "JK": "L" },
            { "No": 187, "Nama": "ARTA MAULANA FRANSETYA", "JK": "L" },
            { "No": 188, "Nama": "MOHAMMAD FAHROZI", "JK": "L" },
            { "No": 189, "Nama": "NUR FADDILLAH", "JK": "P" },
            { "No": 190, "Nama": "YOHANA ARIANTI PUTRI FIRDAUS", "JK": "P" },
            { "No": 191, "Nama": "MOH.WILIDAN ABROR MALISI", "JK": "L" },
            { "No": 192, "Nama": "LINTANG PUTRI SAFIRA", "JK": "P" },
            { "No": 193, "Nama": "DWI YUNI KUSWANDARI", "JK": "P" },
            { "No": 194, "Nama": "NIKO ARDIANSYAH", "JK": "L" },
            { "No": 195, "Nama": "RICO KURNIAWAN", "JK": "L" },
        ];

      // Hapus data duplikat berdasarkan nama
dataSiswa = dataSiswa.filter((item, index, self) =>
    index === self.findIndex((t) => t.Nama === item.Nama)
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
                    <td class="siswa" data-label="Thn. Lulus"><span class="alumni-directory-lock">2019</span></td>
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
                        <div class="siswa-card-row"><strong>Thn. Lulus:</strong> <span><span class="alumni-directory-lock">2019</span></span></div>
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
