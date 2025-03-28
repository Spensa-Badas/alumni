        // Fungsi untuk mengubah nama menjadi Capitalized Case
        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

        // Data alumni 2018
        let dataSiswa = [
            { "No": 1, "Nama": "ACHMAD BAYU AJI", "JK": "L" },
            { "No": 2, "Nama": "AGUNG NUGROHO WICAKSONO", "JK": "L" },
            { "No": 3, "Nama": "ALFIN LAM IQBAL", "JK": "L" },
            { "No": 4, "Nama": "AMELIA YASINTA MELADI", "JK": "P" },
            { "No": 5, "Nama": "ANANDA MIKO PANGESTU", "JK": "L" },
            { "No": 6, "Nama": "ANGGA BRIAN RANDIKA", "JK": "L" },
            { "No": 7, "Nama": "ANTON DWI SAPUTRO", "JK": "L" },
            { "No": 8, "Nama": "ARIEL RAMADHANI", "JK": "L" },
            { "No": 9, "Nama": "ARTA MAULANA FRANSETYA", "JK": "L" },
            { "No": 10, "Nama": "CHUSNUN NISAK", "JK": "P" },
            { "No": 11, "Nama": "DEWI NAWANG SARI", "JK": "P" },
            { "No": 12, "Nama": "DIMAZ SYAMSUL MA'ARIF", "JK": "L" },
            { "No": 13, "Nama": "DINDA YESSIKA PARAMITA", "JK": "P" },
            { "No": 14, "Nama": "DWI YUNI KUSWANDARI", "JK": "P" },
            { "No": 15, "Nama": "EKA MIA MARISCHA", "JK": "P" },
            { "No": 16, "Nama": "INDRA RAMADHAN", "JK": "L" },
            { "No": 17, "Nama": "KEFIN BAGAS ANDRIANSAH", "JK": "L" },
            { "No": 18, "Nama": "LINTANG PUTRI SAFIRA", "JK": "P" },
            { "No": 19, "Nama": "M. KHOIRUL HANI", "JK": "L" },
            { "No": 20, "Nama": "M. ROBBY AR ROBETS", "JK": "L" },
            { "No": 21, "Nama": "MEYICA FAJAR DAMAYANTI", "JK": "P" },
            { "No": 22, "Nama": "MIRTA ARTIKA ZARA", "JK": "P" },
            { "No": 23, "Nama": "MOH.WILIDAN ABROR MALISI", "JK": "L" },
            { "No": 24, "Nama": "MOHAMMAD FAHROZI", "JK": "L" },
            { "No": 25, "Nama": "MUDDRIKA DEWI AGUSTIA", "JK": "P" },
            { "No": 26, "Nama": "MUHAMMAD ANDRIAN MAULANA", "JK": "L" },
            { "No": 27, "Nama": "MUHAMMAD SEVA ILYASA", "JK": "L" },
            { "No": 28, "Nama": "NENSI NORISTA", "JK": "P" },
            { "No": 29, "Nama": "NIKO ARDIANSYAH", "JK": "L" },
            { "No": 30, "Nama": "NUR FADDILLAH", "JK": "P" },
            { "No": 31, "Nama": "RICO KURNIAWAN", "JK": "L" },
            { "No": 32, "Nama": "RINJANI DWI PRATIWI", "JK": "P" },
            { "No": 33, "Nama": "ROSALINA MOHAMAD", "JK": "P" },
            { "No": 34, "Nama": "SINDI PRADITA", "JK": "P" },
            { "No": 35, "Nama": "THERY KUSUMA WARDANI", "JK": "P" },
            { "No": 36, "Nama": "TONI MAULANA", "JK": "L" },
            { "No": 37, "Nama": "TONY ARDIANSYAH", "JK": "L" },
            { "No": 38, "Nama": "VANES ANGGA SAPUTRA", "JK": "L" },
            { "No": 39, "Nama": "VIONA DWI PUTRI RAHMAWATI", "JK": "P" },
            { "No": 40, "Nama": "YOHANA ARIANTI PUTRI FIRDAUS", "JK": "P" },
            { "No": 41, "Nama": "AGIL DERMAWAN", "JK": "L" },
            { "No": 42, "Nama": "AHMAD HIFDZI", "JK": "L" },
            { "No": 43, "Nama": "DESI FATKULENI", "JK": "P" },
            { "No": 44, "Nama": "ELOK RAHMAWATI", "JK": "P" },
            { "No": 45, "Nama": "FANIA EKA MAULIDNA", "JK": "P" },
            { "No": 46, "Nama": "FANNY SETIAWAN", "JK": "L" },
            { "No": 47, "Nama": "FARHAN GILANG PRATAMA", "JK": "L" },
            { "No": 48, "Nama": "FAUZHAN AL ABSHI WARDANA", "JK": "L" },
            { "No": 49, "Nama": "FERY ARIYANTO", "JK": "L" },
            { "No": 50, "Nama": "ISMI SARAH", "JK": "P" },
            { "No": 51, "Nama": "ISNINA MARATUSSOLIHAH", "JK": "P" },
            { "No": 52, "Nama": "IVON ALIA PUTRI", "JK": "P" },
            { "No": 53, "Nama": "KHARITS MUZAKI", "JK": "L" },
            { "No": 54, "Nama": "KRESNA CANDRA WIJAYA", "JK": "L" },
            { "No": 55, "Nama": "KRISNA DIANOMAULANA", "JK": "L" },
            { "No": 56, "Nama": "LINDA MEI SHANTI", "JK": "P" },
            { "No": 57, "Nama": "LUSI NUR AIDA", "JK": "P" },
            { "No": 58, "Nama": "MEILINDA MUHIMMATUL AZIZAH", "JK": "P" },
            { "No": 59, "Nama": "MOCHAMAD HAFIZH RIDWAN", "JK": "L" },
            { "No": 60, "Nama": "MOH. CHOIRULLOH", "JK": "L" },
            { "No": 61, "Nama": "MOHAMAD TEZAR RAMADHANI", "JK": "L" },
            { "No": 62, "Nama": "MOHAMMAD NUR RIZAL", "JK": "L" },
            { "No": 63, "Nama": "MUHAMMAD RENDY", "JK": "L" },
            { "No": 64, "Nama": "MUHAMMAD WAHYU FIADI", "JK": "L" },
            { "No": 65, "Nama": "MUHAMMAD WILDAN RAMADHANI", "JK": "L" },
            { "No": 66, "Nama": "NEO GITA HADISTYA", "JK": "P" },
            { "No": 67, "Nama": "NISAK NURWAQIDAH", "JK": "P" },
            { "No": 68, "Nama": "NOVA NATALIYA", "JK": "P" },
            { "No": 69, "Nama": "NOVI FITRIA SARI", "JK": "P" },
            { "No": 70, "Nama": "NUR FADILAH", "JK": "P" },
            { "No": 71, "Nama": "PUTRI DWI JAYANTI", "JK": "P" },
            { "No": 72, "Nama": "RAHMAT IRGI MATOFANI", "JK": "L" },
            { "No": 73, "Nama": "RAYYAN RIZARD DANUARTHA", "JK": "L" },
            { "No": 74, "Nama": "RENALDI HENDRA FIRMANSYAH", "JK": "L" },
            { "No": 75, "Nama": "SASKIA FIDIASTI", "JK": "P" },
            { "No": 76, "Nama": "SHOIMATUL RIZQIA", "JK": "P" },
            { "No": 77, "Nama": "SITI NUR ROCHMA", "JK": "P" },
            { "No": 78, "Nama": "TITA NOVIA SARI", "JK": "P" },
            { "No": 79, "Nama": "YUSUF NABAWI", "JK": "L" },
            { "No": 80, "Nama": "ZUNITA EKA DIANA", "JK": "P" },
            { "No": 81, "Nama": "ABRAHAM HIMAWAN", "JK": "L" },
            { "No": 82, "Nama": "ADILA ROSA RIFATUN AISYAH", "JK": "P" },
            { "No": 83, "Nama": "AHMAD DUKRI", "JK": "L" },
            { "No": 84, "Nama": "AHMAD HASIM", "JK": "L" },
            { "No": 85, "Nama": "ANDHI YOGA PRATAMA", "JK": "L" },
            { "No": 86, "Nama": "ANGGA AGUS ANDRIAN", "JK": "L" },
            { "No": 87, "Nama": "ATIKA NUR ABIDAH", "JK": "P" },
            { "No": 88, "Nama": "CICI TRI WIJAYANTI", "JK": "P" },
            { "No": 89, "Nama": "CLASSIC BUANA PUTRI", "JK": "P" },
            { "No": 90, "Nama": "DEWI TITANIA ADISTI LUCKY FAHRISI", "JK": "P" },
            { "No": 91, "Nama": "DIAH FATMA HIDAYATI", "JK": "P" },
            { "No": 92, "Nama": "EKA NUR RENZA GIMNASTIAR", "JK": "L" },
            { "No": 93, "Nama": "EKA NURBAYA", "JK": "P" },
            { "No": 94, "Nama": "ELA AYU LINDA", "JK": "P" },
            { "No": 95, "Nama": "FATHI KHATUL CHOIRUN ANNISSA", "JK": "P" },
            { "No": 96, "Nama": "KRIS DEVI ARDIANINGTYAS", "JK": "P" },
            { "No": 97, "Nama": "LEO ABDUL KOWY LUBIS", "JK": "L" },
            { "No": 98, "Nama": "M. FARHANUDDIN SYAH", "JK": "L" },
            { "No": 99, "Nama": "M. INDRA PRASTYO", "JK": "L" },
            { "No": 100, "Nama": "M. IRVAN HIDAYATULLOH", "JK": "L" },
            { "No": 101, "Nama": "M. ZOGA RUDIYANTO", "JK": "L" },
            { "No": 102, "Nama": "MARSEKAL ORION TORAYA PIRADE", "JK": "L" },
            { "No": 103, "Nama": "MOHAMMAD FEBRY ARDYANSYAH", "JK": "L" },
            { "No": 104, "Nama": "MOHAMMAD ZAINUL ROHMAN", "JK": "L" },
            { "No": 105, "Nama": "MUHAMMAD FIGO BAGAS DONATA", "JK": "L" },
            { "No": 106, "Nama": "OKTAVYA BERLIANA PUTRI", "JK": "P" },
            { "No": 107, "Nama": "OVI LESTIANI", "JK": "P" },
            { "No": 108, "Nama": "PUSPITA DIAH ANGGRAINI", "JK": "P" },
            { "No": 109, "Nama": "PUTRO RAGIL AJI WICAKSONO", "JK": "L" },
            { "No": 110, "Nama": "QORI' RAHMA AGUSTINA", "JK": "P" },
            { "No": 111, "Nama": "ROUDHOTUR ROYAN", "JK": "L" },
            { "No": 112, "Nama": "SANIA SETIANA FIRNANDA", "JK": "P" },
            { "No": 113, "Nama": "SATRIA SUNDAVA", "JK": "L" },
            { "No": 114, "Nama": "SINTA JUNIAR ADISTRI", "JK": "P" },
            { "No": 115, "Nama": "SOFI UMAYA", "JK": "P" },
            { "No": 116, "Nama": "TEGAR OKY PRATAMA", "JK": "L" },
            { "No": 117, "Nama": "THYA WANDARI", "JK": "P" },
            { "No": 118, "Nama": "WAHYU TRI CAHYONO", "JK": "L" },
            { "No": 119, "Nama": "YONATAN SYALOM OTNIEL", "JK": "L" },
            { "No": 120, "Nama": "YUDI FEBRIANTO", "JK": "L" },
            { "No": 121, "Nama": "YUNUS ABDUL ROZAK", "JK": "L" },
            { "No": 122, "Nama": "RINJANI DWI PRATIWI", "JK": "P" },
            { "No": 123, "Nama": "NENSI NORISTA", "JK": "P" },
            { "No": 124, "Nama": "CHUSNUN NISAK", "JK": "P" },
            { "No": 125, "Nama": "MEYICA FAJAR DAMAYANTI", "JK": "P" },
            { "No": 126, "Nama": "ANGGA BRIAN RANDIKA", "JK": "L" },
            { "No": 127, "Nama": "DINDA YESSIKA PARAMITA", "JK": "P" },
            { "No": 128, "Nama": "MUHAMMAD SEVA ILYASA", "JK": "L" },
            { "No": 129, "Nama": "ACHMAD BAYU AJI", "JK": "L" },
            { "No": 130, "Nama": "MUDDRIKA DEWI AGUSTIA", "JK": "P" },
            { "No": 131, "Nama": "ROSALINA MOHAMAD", "JK": "P" },
            { "No": 132, "Nama": "MIRTA ARTIKA ZARA", "JK": "P" },
            { "No": 133, "Nama": "M. KHOIRUL HANI", "JK": "L" },
            { "No": 134, "Nama": "M. ROBBY AR ROBETS", "JK": "L" },
            { "No": 135, "Nama": "ARIEL RAMADHANI", "JK": "L" },
            { "No": 136, "Nama": "ALFIN LAM IQBAL", "JK": "L" },
            { "No": 137, "Nama": "VANES ANGGA SAPUTRA", "JK": "L" },
            { "No": 138, "Nama": "YUNUS ABDUL ROZAK", "JK": "L" },
            { "No": 139, "Nama": "DEWI NAWANG SARI", "JK": "P" },
            { "No": 140, "Nama": "MUHAMMAD ANDRIAN MAULANA", "JK": "L" },
            { "No": 141, "Nama": "EKA MIA MARISCHA", "JK": "P" },
            { "No": 142, "Nama": "YONATAN SYALOM OTNIEL", "JK": "L" },
            { "No": 143, "Nama": "AMELIA YASINTA MELADI", "JK": "P" },
            { "No": 144, "Nama": "AGUNG NUGROHO WICAKSONO", "JK": "L" },
            { "No": 145, "Nama": "INDRA RAMADHAN", "JK": "L" },
            { "No": 146, "Nama": "TONI MAULANA", "JK": "L" },
            { "No": 147, "Nama": "VIONA DWI PUTRI RAHMAWATI", "JK": "P" },
            { "No": 148, "Nama": "TONY ARDIANSYAH", "JK": "L" },
            { "No": 149, "Nama": "ANANDA MIKO PANGESTU", "JK": "L" },
            { "No": 150, "Nama": "KEFIN BAGAS ANDRIANSAH", "JK": "L" },
            { "No": 151, "Nama": "THERY KUSUMA WARDANI", "JK": "P" },
            { "No": 152, "Nama": "ANTON DWI SAPUTRO", "JK": "L" },
            { "No": 153, "Nama": "ARTA MAULANA FRANSETYA", "JK": "L" },
            { "No": 154, "Nama": "MOHAMMAD FAHROZI", "JK": "L" },
            { "No": 155, "Nama": "NUR FADDILLAH", "JK": "P" },
            { "No": 156, "Nama": "YOHANA ARIANTI PUTRI FIRDAUS", "JK": "P" },
            { "No": 157, "Nama": "MOH.WILIDAN ABROR MALISI", "JK": "L" },
            { "No": 158, "Nama": "LINTANG PUTRI SAFIRA", "JK": "P" },
            { "No": 159, "Nama": "DWI YUNI KUSWANDARI", "JK": "P" },
            { "No": 160, "Nama": "NIKO ARDIANSYAH", "JK": "L" },
            { "No": 161, "Nama": "RICO KURNIAWAN", "JK": "L" }
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
                    <td class="siswa" data-label="Thn. Lulus"><span class="alumni-directory-lock">2018</span></td>
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
                        <div class="siswa-card-row"><strong>Thn. Lulus:</strong> <span><span class="alumni-directory-lock">2018</span></span></div>
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
