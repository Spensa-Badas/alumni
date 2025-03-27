        // Fungsi untuk mengubah nama menjadi Capitalized Case
        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

        // Data alumni 2021
        let dataSiswa = [
            { "No": 1, "Nama": "ACHMAD ACHYARI", "JK": "L" },
            { "No": 2, "Nama": "ADRYAN HIDAYATULLAH", "JK": "L" },
            { "No": 3, "Nama": "AFIN MAULANA", "JK": "L" },
            { "No": 4, "Nama": "AHMAD KURNIAWAN", "JK": "L" },
            { "No": 5, "Nama": "AKHLAQUL MAHMUDAH INDY AGUSTIN", "JK": "P" },
            { "No": 6, "Nama": "AMELIA FEBRIYANTI", "JK": "P" },
            { "No": 7, "Nama": "AMELIA RISKA PUTRI", "JK": "P" },
            { "No": 8, "Nama": "ARFIDIA WULAN AMALIA", "JK": "P" },
            { "No": 9, "Nama": "CISITA AMAY CANTIKA", "JK": "P" },
            { "No": 10, "Nama": "DIMAS PRASASTYO", "JK": "L" },
            { "No": 11, "Nama": "ELSA KHOIRUNISA", "JK": "P" },
            { "No": 12, "Nama": "ERIKA PUTRI SAHARANI", "JK": "P" },
            { "No": 13, "Nama": "FADEA OLIVIA BERNIKA IFANDA", "JK": "P" },
            { "No": 14, "Nama": "FADHIL NUR ROHMAN", "JK": "L" },
            { "No": 15, "Nama": "HANSONI NUGROHO", "JK": "L" },
            { "No": 16, "Nama": "HERIN YULIAWATI", "JK": "P" },
            { "No": 17, "Nama": "INTAN AGUSTINA LIKABELLA PUTRI", "JK": "P" },
            { "No": 18, "Nama": "MOCH. LUTHFI ARGHUBI", "JK": "L" },
            { "No": 19, "Nama": "MOH HENDRA SAPUTRA", "JK": "L" },
            { "No": 20, "Nama": "MOH. REZA AFFANDI", "JK": "L" },
            { "No": 21, "Nama": "MOHAMMAD AL AZHAR FIRDAUS", "JK": "L" },
            { "No": 22, "Nama": "MUH FAHRIZAL", "JK": "L" },
            { "No": 23, "Nama": "NADITA LELI ANATASIA", "JK": "P" },
            { "No": 24, "Nama": "NUR NAHJA HIDAYAH", "JK": "P" },
            { "No": 25, "Nama": "RENA WIJAYANTI", "JK": "P" },
            { "No": 26, "Nama": "RENDI FIRMAN ALAMSYAH", "JK": "L" },
            { "No": 27, "Nama": "REVA NUR LAILA", "JK": "P" },
            { "No": 28, "Nama": "SANTI NUR WAHYUNI", "JK": "P" },
            { "No": 29, "Nama": "SINTA ASTIVO AULIA", "JK": "P" },
            { "No": 30, "Nama": "URSULA GRIYYAZAHRA RAHMATIZZA", "JK": "P" },
            { "No": 31, "Nama": "YOVITA AMELIA LIBY LISANDRA", "JK": "P" },
            { "No": 32, "Nama": "YUVAN PUTRA PRATAMA AL VIRDAUS", "JK": "L" },
            { "No": 33, "Nama": "AGUS PRASETYO", "JK": "L" },
            { "No": 34, "Nama": "ALFIANA RAHMAWATI", "JK": "P" },
            { "No": 35, "Nama": "ANNISA DWI FEBIYANTI", "JK": "P" },
            { "No": 36, "Nama": "APRELIA INTAN MAULINA", "JK": "P" },
            { "No": 37, "Nama": "ARDI FIRMAN SAPUTRA", "JK": "L" },
            { "No": 38, "Nama": "DEWA ANGGA SAPUTRA", "JK": "L" },
            { "No": 39, "Nama": "DEWI NOVITA SARI", "JK": "P" },
            { "No": 40, "Nama": "DONI ANDRIANTO", "JK": "L" },
            { "No": 41, "Nama": "FITRI MIFTHAKHUL KARIMAH", "JK": "P" },
            { "No": 42, "Nama": "GALANG JUHAN PRATAMA", "JK": "L" },
            { "No": 43, "Nama": "HENRY AFINA FAZA ALIFIA", "JK": "L" },
            { "No": 44, "Nama": "HERU RAHMAT IZAL", "JK": "L" },
            { "No": 45, "Nama": "IFTIA LINA WATI", "JK": "P" },
            { "No": 46, "Nama": "INDAH TRI SUSANTI", "JK": "P" },
            { "No": 47, "Nama": "LAILATUL FITRIA", "JK": "P" },
            { "No": 48, "Nama": "M AGUNG HANAFI", "JK": "L" },
            { "No": 49, "Nama": "M KHOIRUL ANWAR", "JK": "L" },
            { "No": 50, "Nama": "M NURI SYAHRUL ROMADLON", "JK": "L" },
            { "No": 51, "Nama": "M. NAZRI MAULANA RAHMAN", "JK": "L" },
            { "No": 52, "Nama": "MAULIDIA BULAN AVPRILLYAN", "JK": "P" },
            { "No": 53, "Nama": "MUHAMMAD HADI SAPUTRO", "JK": "L" },
            { "No": 54, "Nama": "MUHAMMAD YAZID ATTAMIMI", "JK": "L" },
            { "No": 55, "Nama": "MULAN SHANDY AULIA", "JK": "P" },
            { "No": 56, "Nama": "MUSTIKA WIDOWATI", "JK": "P" },
            { "No": 57, "Nama": "MUTIARA NUR ARDLILA", "JK": "P" },
            { "No": 58, "Nama": "NAJA NUR NASROH", "JK": "L" },
            { "No": 59, "Nama": "OKTAVIA RAHMADANI NURLEILA", "JK": "P" },
            { "No": 60, "Nama": "RANIA AULIA SIVA", "JK": "P" },
            { "No": 61, "Nama": "REHAN ARDIANTO", "JK": "L" },
            { "No": 62, "Nama": "VERDI DWI ARDIANTO", "JK": "L" },
            { "No": 63, "Nama": "ZAHWA SITI HIJRIYANA", "JK": "P" },
            { "No": 64, "Nama": "ZERRY YURIKA", "JK": "P" },
            { "No": 65, "Nama": "ADELIA ZULFA", "JK": "P" },
            { "No": 66, "Nama": "AJENG RORO DEWI MASITOH", "JK": "P" },
            { "No": 67, "Nama": "AJWA NAFILA LIULINNUHA", "JK": "P" },
            { "No": 68, "Nama": "ANIZA DIAN ANGGRAINI", "JK": "P" },
            { "No": 69, "Nama": "ANTA WIJAYA KUSUMA", "JK": "L" },
            { "No": 70, "Nama": "BIMA SETIA ABDUL FATAH", "JK": "L" },
            { "No": 71, "Nama": "DELMA FIKA BUANA PRAMITA", "JK": "P" },
            { "No": 72, "Nama": "DINI AULIA", "JK": "P" },
            { "No": 73, "Nama": "FEBRI SRI WAHYUNING ATIK", "JK": "P" },
            { "No": 74, "Nama": "FELA NITHA RAMANDANI", "JK": "P" },
            { "No": 75, "Nama": "FIDTRI RAHMAWATI", "JK": "P" },
            { "No": 76, "Nama": "HANDREAS JOEWARTONO", "JK": "L" },
            { "No": 77, "Nama": "KELVIN ARDY KURNIAWAN", "JK": "L" },
            { "No": 78, "Nama": "LIA DEVI WULANDARI", "JK": "P" },
            { "No": 79, "Nama": "M ARDHI TUTUR WICAKSONO", "JK": "L" },
            { "No": 80, "Nama": "M SAFIUDDIN", "JK": "L" },
            { "No": 81, "Nama": "MARSHALL REZA SYAHPUTRA", "JK": "L" },
            { "No": 82, "Nama": "MAULIDHIYA FEBY THREE", "JK": "P" },
            { "No": 83, "Nama": "MUHAMMAD ABDA IZADIN", "JK": "L" },
            { "No": 84, "Nama": "MUHAMMAD NUR ROKHIM", "JK": "L" },
            { "No": 85, "Nama": "NAFIDATUS SAADAH", "JK": "P" },
            { "No": 86, "Nama": "NANDA GALIH KURNIANTO", "JK": "L" },
            { "No": 87, "Nama": "NOVA SARI", "JK": "P" },
            { "No": 88, "Nama": "NUR ROCHMAH ISNAINI", "JK": "P" },
            { "No": 89, "Nama": "RAHMAT BAGUS SAPUTRA", "JK": "L" },
            { "No": 90, "Nama": "REZA ADITYA PRATAMA", "JK": "L" },
            { "No": 91, "Nama": "ROBBY DIO RAMADHANI", "JK": "L" },
            { "No": 92, "Nama": "SAPTO HADI ADI FEBRIANTO", "JK": "L" },
            { "No": 93, "Nama": "SEVTY ELLYN AZALYZA", "JK": "P" },
            { "No": 94, "Nama": "SHEYLLA ANGGRAINI", "JK": "P" },
            { "No": 95, "Nama": "SHINTA TRIVIA NOVASARI", "JK": "P" },
            { "No": 96, "Nama": "ZULFA NORANINDA WATI", "JK": "P" },
            { "No": 97, "Nama": "AHMAD FARIH BINTANG PRATAMA", "JK": "L" },
            { "No": 98, "Nama": "AHMAD NUR RAFI", "JK": "L" },
            { "No": 99, "Nama": "AKSA FERNANDA", "JK": "L" },
            { "No": 100, "Nama": "ARDIKA VIKY RISWANDA", "JK": "L" },
            { "No": 101, "Nama": "DELA PERMATA SARI", "JK": "P" },
            { "No": 102, "Nama": "DINDA HUROTIN AYUNINA", "JK": "P" },
            { "No": 103, "Nama": "DINDA SETIAWATI", "JK": "P" },
            { "No": 104, "Nama": "DITA RIA DWIATMAYANTI", "JK": "P" },
            { "No": 105, "Nama": "FATAKHUL MUAWAN", "JK": "L" },
            { "No": 106, "Nama": "FEBRINA ARDILA SARI", "JK": "P" },
            { "No": 107, "Nama": "HANUM AINUN QULBI", "JK": "P" },
            { "No": 108, "Nama": "INDRA WAHYU PRATAMA", "JK": "L" },
            { "No": 109, "Nama": "JOHAN JANUAR", "JK": "L" },
            { "No": 110, "Nama": "JUNNANDA ARIF ABDULLAH", "JK": "L" },
            { "No": 111, "Nama": "LISA APRILIA CHOFIFAH", "JK": "P" },
            { "No": 112, "Nama": "MARISA BELLA SEPTIA", "JK": "P" },
            { "No": 113, "Nama": "MAYANG KARINA TRISETYO ANGGRAINI", "JK": "P" },
            { "No": 114, "Nama": "MOH IFAN MAULANA", "JK": "L" },
            { "No": 115, "Nama": "MUHAMMAD DWI APRILLIYAN", "JK": "L" },
            { "No": 116, "Nama": "MUHAMMAD ILHAM FIRMANSYAH", "JK": "L" },
            { "No": 117, "Nama": "RIKI ARIFIANTO", "JK": "L" },
            { "No": 118, "Nama": "RISKA DESILIA ANJARROTIN", "JK": "P" },
            { "No": 119, "Nama": "RISKA SAFINES", "JK": "P" },
            { "No": 120, "Nama": "RIVALDO STIVEN ASADDULLOH", "JK": "L" },
            { "No": 121, "Nama": "RIVAN SEFTIKA JULIANSYAH", "JK": "L" },
            { "No": 122, "Nama": "SHONIA IKE RISANTI", "JK": "P" },
            { "No": 123, "Nama": "SULTAN AHMAD NURUDIN", "JK": "L" },
            { "No": 124, "Nama": "TAMARA MISYA QURRINIIN", "JK": "P" },
            { "No": 125, "Nama": "VIVI ANGGRAINI", "JK": "P" },
            { "No": 126, "Nama": "WAZNA QISTHI KHOIRUNNISAK", "JK": "P" },
            { "No": 127, "Nama": "YOSI PUTRA PRATAMA", "JK": "L" },
            { "No": 128, "Nama": "YUNI EKA PUJI ASTUTIK", "JK": "P" },
            { "No": 129, "Nama": "ACHMAD UZAIR ASRORI", "JK": "L" },
            { "No": 130, "Nama": "ADINDA RIZKY AMELIA", "JK": "P" },
            { "No": 131, "Nama": "ADITYA FADHILAH AKBAR", "JK": "L" },
            { "No": 132, "Nama": "AHMAD ADITYA SYAHWALUDIN", "JK": "L" },
            { "No": 133, "Nama": "ANDI NUR ROHMAN", "JK": "L" },
            { "No": 134, "Nama": "ANDREAN BAGUS SUBEKTI", "JK": "L" },
            { "No": 135, "Nama": "ASMAUL KHUSNAH", "JK": "P" },
            { "No": 136, "Nama": "DEANOVA LISTYA PUTRI S.", "JK": "P" },
            { "No": 137, "Nama": "DEWI ANILLA", "JK": "P" },
            { "No": 138, "Nama": "DINDA RAHMADHANI", "JK": "P" },
            { "No": 139, "Nama": "DZIKRULLOH CHELSY CISTA ADABI", "JK": "L" },
            { "No": 140, "Nama": "FITRIANA LIUNZIRA", "JK": "P" },
            { "No": 141, "Nama": "ICHA AYU PARAMITHA PUTRI", "JK": "P" },
            { "No": 142, "Nama": "IFA NURAINI", "JK": "P" },
            { "No": 143, "Nama": "MAAILA FAIZZA YUSUF", "JK": "P" },
            { "No": 144, "Nama": "MICHAEL DIEGO RAMADANA", "JK": "L" },
            { "No": 145, "Nama": "MOCH RIVALDY", "JK": "L" },
            { "No": 146, "Nama": "MOH. ZOGI FEBRIYANTO", "JK": "L" },
            { "No": 147, "Nama": "MOHAMAD ANDIKA MAULANA", "JK": "L" },
            { "No": 148, "Nama": "MOHAMMAD NICO ADI SAPUTRA", "JK": "L" },
            { "No": 149, "Nama": "NOVAN HOESNI CAHYONO", "JK": "L" },
            { "No": 150, "Nama": "NUR ANNISA SUFINA", "JK": "P" },
            { "No": 151, "Nama": "RAFLI JOSEPH ALEXANDER", "JK": "L" },
            { "No": 152, "Nama": "RAYHAN RIKI SAIFUDIN", "JK": "L" },
            { "No": 153, "Nama": "RENDI NATZWA PUTRA", "JK": "L" },
            { "No": 154, "Nama": "RIDOH SETIO", "JK": "L" },
            { "No": 155, "Nama": "RISMA AYU KURNIAWATI", "JK": "P" },
            { "No": 156, "Nama": "RISMA WAHYUNINGTYAS", "JK": "P" },
            { "No": 157, "Nama": "SANTI WATMAWATI", "JK": "P" },
            { "No": 158, "Nama": "SEFIA PUTRI ANGGRAINI", "JK": "P" },
            { "No": 159, "Nama": "SHINTA MAULIDA", "JK": "P" },
            { "No": 160, "Nama": "ULAIKA", "JK": "P" },
            { "No": 161, "Nama": "AISYAH PRANATHANIA", "JK": "P" },
            { "No": 162, "Nama": "DIMAS ARIL KURNIAWAN", "JK": "L" },
            { "No": 163, "Nama": "EGA MELANI PUTRI", "JK": "P" },
            { "No": 164, "Nama": "FADILA SEPTYA RIZQI", "JK": "P" },
            { "No": 165, "Nama": "FINDI EGIS TIANA", "JK": "P" },
            { "No": 166, "Nama": "GEOVANDRA TARTIANSYAH", "JK": "L" },
            { "No": 167, "Nama": "IGO RIZA WAHYUDA", "JK": "L" },
            { "No": 168, "Nama": "IIN INDAH PUTRI", "JK": "P" },
            { "No": 169, "Nama": "IKA NATALIA", "JK": "P" },
            { "No": 170, "Nama": "LINDA MAULIDIA", "JK": "P" },
            { "No": 171, "Nama": "M ZAINAL FARIKIN", "JK": "L" },
            { "No": 172, "Nama": "MALA DWI SEFTIANA", "JK": "P" },
            { "No": 173, "Nama": "MEILANY OKTAVIANA AURA PUTRI DEWI", "JK": "P" },
            { "No": 174, "Nama": "MOCH YOGI APRIAN PRAKOSO", "JK": "L" },
            { "No": 175, "Nama": "MOH RENDI YOGATAMA", "JK": "L" },
            { "No": 176, "Nama": "MOH. NOVAL RAMADANI", "JK": "L" },
            { "No": 177, "Nama": "MOHAMAD ALDO TRI LAKSONO", "JK": "L" },
            { "No": 178, "Nama": "MUH DIMAS ERIK MAULANA", "JK": "L" },
            { "No": 179, "Nama": "MUHAMMAD ABDUL CHOIRUL HUDA ASARI", "JK": "L" },
            { "No": 180, "Nama": "MUHAMMAD TANGGUH FAWWAAZ", "JK": "L" },
            { "No": 181, "Nama": "NESSA FEBRIANA SARI", "JK": "P" },
            { "No": 182, "Nama": "NURUL PUTRI MAHARANI", "JK": "P" },
            { "No": 183, "Nama": "RENDI SHEVA HADINATA", "JK": "L" },
            { "No": 184, "Nama": "REVIDA SALSABILA", "JK": "P" },
            { "No": 185, "Nama": "REZA AZZAHRA NURFADILA", "JK": "P" },
            { "No": 186, "Nama": "RICKY DANIL PRATAMA", "JK": "L" },
            { "No": 187, "Nama": "RINI VIA AMELIANI", "JK": "P" },
            { "No": 188, "Nama": "RISMA AULIA PASYA", "JK": "P" },
            { "No": 189, "Nama": "SALSA LAILATURRIZA AGUSTIN", "JK": "P" },
            { "No": 190, "Nama": "SENDY FIRMAN APRILIANTO", "JK": "L" },
            { "No": 191, "Nama": "SIROJUL MUFID", "JK": "L" },
            { "No": 192, "Nama": "THASYA TRI MARSELA", "JK": "P" },
            { "No": 193, "Nama": "TONI PRASETYO", "JK": "L" },
            { "No": 194, "Nama": "VARAZUAN TYARA PUTRI RAMADHANI", "JK": "P" },
            { "No": 195, "Nama": "ZEFANYA ANINDIA MEILANI PUTRI", "JK": "P" }
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
                    <td class="siswa" data-label="Thn. Lulus"><span class="alumni-directory-lock">2021</span></td>
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
                        <div class="siswa-card-row"><strong>Thn. Lulus:</strong> <span><span class="alumni-directory-lock">2021</span></span></div>
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
