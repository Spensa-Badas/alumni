 // Fungsi untuk mengubah nama menjadi Capitalized Case
        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

        // Data alumni 2020
        let dataSiswa = [
            { "No": 1, "Nama": "ADITYA ANANDA PRASETYO", "JK": "L" },
            { "No": 2, "Nama": "AGUNG WAHYU HIDAYAT", "JK": "L" },
            { "No": 3, "Nama": "AHMAD FAIZ IMTIHAN", "JK": "L" },
            { "No": 4, "Nama": "AMAR ASYKIRA", "JK": "L" },
            { "No": 5, "Nama": "ANANDA REFI MEDINTA", "JK": "P" },
            { "No": 6, "Nama": "ASFA ABDUL RAZIQ", "JK": "L" },
            { "No": 7, "Nama": "FARIS HIDAYAT", "JK": "L" },
            { "No": 8, "Nama": "FERI SETIAWAN", "JK": "L" },
            { "No": 9, "Nama": "FITRI AMALIA SALSABILA", "JK": "P" },
            { "No": 10, "Nama": "GALEH AGUS PRASETYO", "JK": "L" },
            { "No": 11, "Nama": "GILANG CAHYO ROMADON", "JK": "L" },
            { "No": 12, "Nama": "HILDA SEPTIA NINGRUM", "JK": "P" },
            { "No": 13, "Nama": "ITA LAILI FARIDA", "JK": "P" },
            { "No": 14, "Nama": "LIVIA EVA NOVIANTI", "JK": "P" },
            { "No": 15, "Nama": "MAHENI DWI NINGTYAS", "JK": "P" },
            { "No": 16, "Nama": "MILA ARUM NUR CAYANA", "JK": "P" },
            { "No": 17, "Nama": "MOCHAMAD IMAN NURZEN", "JK": "L" },
            { "No": 18, "Nama": "MOH. DIMAS PRAYOGA", "JK": "L" },
            { "No": 19, "Nama": "MOH.TRIWAHYUDI", "JK": "L" },
            { "No": 20, "Nama": "MOHAMMAD YOGA", "JK": "L" },
            { "No": 21, "Nama": "MUHAMMAD ASHFIN EKA SAPUTRA", "JK": "L" },
            { "No": 22, "Nama": "NOVITA TRI AGUSTINA", "JK": "P" },
            { "No": 23, "Nama": "RAFIF QURUNUL BAHRI", "JK": "L" },
            { "No": 24, "Nama": "REZI FATKURRAHMAN", "JK": "L" },
            { "No": 25, "Nama": "RHIFAIZA ISMANINGTYAS", "JK": "P" },
            { "No": 26, "Nama": "RITA OKTA VIANINGSIH", "JK": "P" },
            { "No": 27, "Nama": "SEPTI DWI SETYORINI", "JK": "P" },
            { "No": 28, "Nama": "SYAHRUL ROMADLON", "JK": "L" },
            { "No": 29, "Nama": "UUS SYARIFATUL KHOIMAH", "JK": "P" },
            { "No": 30, "Nama": "WIBI WICAKSONO PAMUNGKAS", "JK": "L" },
            { "No": 31, "Nama": "YULIANA WULAN APRILIA", "JK": "P" },
            { "No": 32, "Nama": "ZUKHRUFATUL INAYAH", "JK": "P" },
            { "No": 33, "Nama": "AHMAD QOWIM COKRO WIBOWO", "JK": "L" },
            { "No": 34, "Nama": "AIDA FITRIANI", "JK": "P" },
            { "No": 35, "Nama": "AKBAR FIRMANSYAH", "JK": "L" },
            { "No": 36, "Nama": "ALVARO AGOESTA ANDRIANT NGAMU", "JK": "L" },
            { "No": 37, "Nama": "ANANDA HACKUL MUHLIS", "JK": "L" },
            { "No": 38, "Nama": "ANGGA YUDHA KARINSHA", "JK": "L" },
            { "No": 39, "Nama": "ARYA SATYA OSADHA", "JK": "L" },
            { "No": 40, "Nama": "AYU NUR FADILAH", "JK": "P" },
            { "No": 41, "Nama": "DANIELA ULFA ARDIANA", "JK": "P" },
            { "No": 42, "Nama": "DAVIT KURNIAWAN", "JK": "L" },
            { "No": 43, "Nama": "DIMAS HARIANTO", "JK": "L" },
            { "No": 44, "Nama": "DWY FRISCA BELLANATALYA", "JK": "P" },
            { "No": 45, "Nama": "FAJAR WAHYUDI", "JK": "L" },
            { "No": 46, "Nama": "INGE KURNIA FEBITASARI", "JK": "P" },
            { "No": 47, "Nama": "INGGAR GILDA WINNIA PRASUCI", "JK": "P" },
            { "No": 48, "Nama": "KAZI SYAFIQQUR ROHMAN", "JK": "L" },
            { "No": 49, "Nama": "KHUSNUL KHOTIMAH", "JK": "P" },
            { "No": 50, "Nama": "MOCH. DIAZ ALFIANA NUGROHO", "JK": "L" },
            { "No": 51, "Nama": "MOCHAMMAD RAKA ALWANDANI SETIYONO", "JK": "L" },
            { "No": 52, "Nama": "MOH.ALDIYANSYAH", "JK": "L" },
            { "No": 53, "Nama": "MOHKAMAT FATKUROHMAN", "JK": "L" },
            { "No": 54, "Nama": "MUHAMAD GITA ARDIANSYAH", "JK": "L" },
            { "No": 55, "Nama": "MULAN BINTANG AGMU CAHYANTIKA", "JK": "P" },
            { "No": 56, "Nama": "NAZWA RAFI'IVANKA", "JK": "P" },
            { "No": 57, "Nama": "NOVAN PUTRA PRASTYAWAN", "JK": "L" },
            { "No": 58, "Nama": "NUR AULIA PUSPITASARI", "JK": "P" },
            { "No": 59, "Nama": "NURUL SILVIA INDRA SARI", "JK": "P" },
            { "No": 60, "Nama": "RARI AJENG SARI", "JK": "P" },
            { "No": 61, "Nama": "RATNA AULIA NISAK", "JK": "P" },
            { "No": 62, "Nama": "REVINDA FITRIANA", "JK": "P" },
            { "No": 63, "Nama": "SEPTIANA WULAN SUPARI", "JK": "P" },
            { "No": 64, "Nama": "SHAKILLA VICKY ANANTHA", "JK": "P" },
            { "No": 65, "Nama": "ALVINA DAMAYANTI", "JK": "P" },
            { "No": 66, "Nama": "ANGGI SUBAGJA", "JK": "L" },
            { "No": 67, "Nama": "ANNISA TRI MUFAIDAH", "JK": "P" },
            { "No": 68, "Nama": "ARMAHEIDI ZAHIDAN", "JK": "L" },
            { "No": 69, "Nama": "ARZETI DEBY FINA", "JK": "P" },
            { "No": 70, "Nama": "BIMA AHMAD NASRULLOH", "JK": "L" },
            { "No": 71, "Nama": "DAFA APRILIO LISTIANTO", "JK": "L" },
            { "No": 72, "Nama": "DEA BUNGA PERMATAHATI", "JK": "P" },
            { "No": 73, "Nama": "DELLA SEPTI KAFIJA", "JK": "P" },
            { "No": 74, "Nama": "DINA ARIYANTI", "JK": "P" },
            { "No": 75, "Nama": "EKA YUDHA PRATAMA", "JK": "L" },
            { "No": 76, "Nama": "FINANDA PUTRI ZELIKA", "JK": "P" },
            { "No": 77, "Nama": "FRIMA INTAN", "JK": "P" },
            { "No": 78, "Nama": "HERA YULIA PUTRI", "JK": "P" },
            { "No": 79, "Nama": "INJUNG MELIA SARI", "JK": "P" },
            { "No": 80, "Nama": "KHOIRUL ABIDIN", "JK": "L" },
            { "No": 81, "Nama": "M TEGAR CAHYA ABADI", "JK": "L" },
            { "No": 82, "Nama": "M. EDHO MANAWA PAMUNGKAS", "JK": "L" },
            { "No": 83, "Nama": "MARETA DWI SAFIRA", "JK": "P" },
            { "No": 84, "Nama": "MARIESTA DEA RAKMAWATI", "JK": "P" },
            { "No": 85, "Nama": "MOCHAMAD FERDI WIBISONO", "JK": "L" },
            { "No": 86, "Nama": "MOCHAMAD VERI EFENDI", "JK": "L" },
            { "No": 87, "Nama": "MOH. FARCHAN ARDIANSYAH", "JK": "L" },
            { "No": 88, "Nama": "MOHAMAT TEDY HASANUDIN", "JK": "L" },
            { "No": 89, "Nama": "MUHAMMAD BIMA AJI SAFA", "JK": "L" },
            { "No": 90, "Nama": "MUHAMMAD IBNU HASYIM", "JK": "L" },
            { "No": 91, "Nama": "MUHAMMAD YOGA MAULANA", "JK": "L" },
            { "No": 92, "Nama": "NOVI FIRNANDA", "JK": "P" },
            { "No": 93, "Nama": "PANDYATAMA REZKY KURNIAWAN", "JK": "L" },
            { "No": 94, "Nama": "RONI ARDIANSYAH", "JK": "L" },
            { "No": 95, "Nama": "SITI KHOIRUNISA", "JK": "P" },
            { "No": 96, "Nama": "WIDYA FITRI AGUSTINA", "JK": "P" },
            { "No": 97, "Nama": "ACHMAD ROMADON", "JK": "L" },
            { "No": 98, "Nama": "AGUS SANTOSO", "JK": "L" },
            { "No": 99, "Nama": "AHMAD FAUZI", "JK": "L" },
            { "No": 100, "Nama": "ALI WAFA QIHA", "JK": "L" },
            { "No": 101, "Nama": "ALVINA SILVIA NAFASARI", "JK": "P" },
            { "No": 102, "Nama": "ANA ALFATIK AZLINA", "JK": "P" },
            { "No": 103, "Nama": "ASKIRA WULANDARI", "JK": "P" },
            { "No": 104, "Nama": "AZIZ NUR ASROFI", "JK": "L" },
            { "No": 105, "Nama": "DIELLA NYNDA SILVINA", "JK": "P" },
            { "No": 106, "Nama": "ELSA SURYA", "JK": "P" },
            { "No": 107, "Nama": "FAKHRUDIN RAMADHONI", "JK": "L" },
            { "No": 108, "Nama": "FERDIANSYAH", "JK": "L" },
            { "No": 109, "Nama": "GALUH AYU SASMITHA", "JK": "P" },
            { "No": 110, "Nama": "IDWAR MALIKUL ZACKY", "JK": "L" },
            { "No": 111, "Nama": "IMANUL MUTTAQIN", "JK": "L" },
            { "No": 112, "Nama": "LAILA WULAN RAMADANI", "JK": "P" },
            { "No": 113, "Nama": "M. ARIFIN ILHAM", "JK": "L" },
            { "No": 114, "Nama": "MOCH. ALDI FIRMANSYAH", "JK": "L" },
            { "No": 115, "Nama": "MOH. MAHDANI MAHDAM", "JK": "L" },
            { "No": 116, "Nama": "MOHAMMAD HASAN MUSTOFA", "JK": "L" },
            { "No": 117, "Nama": "MUHAMAD AZIZ GHUFRON", "JK": "L" },
            { "No": 118, "Nama": "MUHAMMAD YUSUF NURDIN", "JK": "L" },
            { "No": 119, "Nama": "NAILAL KARIMAH", "JK": "P" },
            { "No": 120, "Nama": "RENO PUTRA ADITYA", "JK": "L" },
            { "No": 121, "Nama": "ROSA AMELIA", "JK": "P" },
            { "No": 122, "Nama": "SHEILLA SYAKIRA", "JK": "P" },
            { "No": 123, "Nama": "SOFIA MUTI", "JK": "P" },
            { "No": 124, "Nama": "THERESIA ANIKA TIARA", "JK": "P" },
            { "No": 125, "Nama": "VELINDA BINTANG MAHARANI", "JK": "P" },
            { "No": 126, "Nama": "YAYUK WIJAYANTI", "JK": "P" },
            { "No": 127, "Nama": "MUHAMMAD ZEHARUDDIN IRZA FARABI", "JK": "L" },
            { "No": 128, "Nama": "ABIDU AQMAL CHOLIS", "JK": "L" },
            { "No": 129, "Nama": "ADAM EKA PRABOWO", "JK": "L" },
            { "No": 130, "Nama": "ADITYA GALIH PRASETYO", "JK": "L" },
            { "No": 131, "Nama": "ALVANI DHARIS SHOFA", "JK": "P" },
            { "No": 132, "Nama": "AVENYA RHEZYCA PUTRI", "JK": "P" },
            { "No": 133, "Nama": "BAGUS KURNIA SYAH PUTRA", "JK": "L" },
            { "No": 134, "Nama": "DANIEL ZOGA SAPUTRA", "JK": "L" },
            { "No": 135, "Nama": "DEVANA PUTRI AULIA", "JK": "P" },
            { "No": 136, "Nama": "DIMAS ZIEN NOFIAN PRATAMA", "JK": "L" },
            { "No": 137, "Nama": "DINO ALFIN ASADILA", "JK": "L" },
            { "No": 138, "Nama": "FAHREZA RIZKY SAPUTRA", "JK": "L" },
            { "No": 139, "Nama": "FARIZA CAHYATI", "JK": "P" },
            { "No": 140, "Nama": "FERI RAMADANI", "JK": "L" },
            { "No": 141, "Nama": "GALUH PRAMUDINTA", "JK": "P" },
            { "No": 142, "Nama": "IRFAN PUTRA SADEWA", "JK": "L" },
            { "No": 143, "Nama": "IRIS SUPARMANTO", "JK": "L" },
            { "No": 144, "Nama": "ISMA NURFADILA", "JK": "P" },
            { "No": 145, "Nama": "LINTANG KUSUMASTUTI", "JK": "P" },
            { "No": 146, "Nama": "M. FIRMAN ULIL AMRI", "JK": "L" },
            { "No": 147, "Nama": "MOCH. FARID", "JK": "L" },
            { "No": 148, "Nama": "MOCHAMMAD FATKHURROCHMAN", "JK": "L" },
            { "No": 149, "Nama": "NUR AFIFAH", "JK": "P" },
            { "No": 150, "Nama": "NUR ALIA KOSASIH", "JK": "P" },
            { "No": 151, "Nama": "PUJI AYU DWI LESTARI", "JK": "P" },
            { "No": 152, "Nama": "RISA AULIA NATARINA", "JK": "P" },
            { "No": 153, "Nama": "ROBED RIO AHMAD ROBBIQIN", "JK": "L" },
            { "No": 154, "Nama": "SHINTIA OVELIA YUNITA PUTRI", "JK": "P" },
            { "No": 155, "Nama": "TATA BINTANG FARROS", "JK": "L" },
            { "No": 156, "Nama": "TIARA SAFIRA ANGGRAINI", "JK": "P" },
            { "No": 157, "Nama": "YUSUF MUBAROK", "JK": "L" }
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
                    <td class="siswa" data-label="Thn. Lulus"><span class="alumni-directory-lock">2020</span></td>
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
                        <div class="siswa-card-row"><strong>Thn. Lulus:</strong> <span><span class="alumni-directory-lock">2020</span></span></div>
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
