 // Simulasi data siswa lebih dari 200 data
        const dataSiswa = [ //Ganti dengan data Alumni
        { "No": 1, "Nama": "Afrielyan Prasetyo Putro", "JK": "L" },
        { "No": 2, "Nama": "Ainun Nur Arifah", "JK": "L" },
        { "No": 3, "Nama": "Ajip Nugroho", "JK": "L" },
        { "No": 4, "Nama": "Catur Ahmad Iriyanto", "JK": "L" },
        { "No": 5, "Nama": "Christanto Sujono", "JK": "P" },
        { "No": 6, "Nama": "Cintia Fransisca", "JK": "P" },
        { "No": 7, "Nama": "Devi Indah Sari", "JK": "L" },
        { "No": 8, "Nama": "Dian Nur Wijayanti", "JK": "P" },
        { "No": 9, "Nama": "Dian Ratnasari", "JK": "L" },
        { "No": 10, "Nama": "Dony Prasetyo", "JK": "L" },
        { "No": 11, "Nama": "Ely Mardiana Fatimah", "JK": "P" },
        { "No": 12, "Nama": "Ema Kurnia Fair", "JK": "P" },
        { "No": 13, "Nama": "Fika Fatimatul Choiroh", "JK": "P" },
        { "No": 14, "Nama": "Ganes Satria Wardhana", "JK": "P" },
        { "No": 15, "Nama": "Intan Dewi Fatika", "JK": "P" },
        { "No": 16, "Nama": "Isabella Alfayeda Hafshoh", "JK": "L" },
        { "No": 17, "Nama": "Krisna Bayu Saputro", "JK": "P" },
        { "No": 18, "Nama": "Linda Ainun Faizah", "JK": "L" },
        { "No": 19, "Nama": "Mochamad Arfian Mauli Hidayat", "JK": "L" },
        { "No": 20, "Nama": "Moh. Sugiarto", "JK": "L" },
        { "No": 21, "Nama": "Muhammad Abdul Al Fatah As'ari", "JK": "P" },
        { "No": 22, "Nama": "Muhammad Zakaria Zakkyrul Haqiqi", "JK": "L" },
        { "No": 23, "Nama": "Nofa Nur Afida", "JK": "P" },
        { "No": 24, "Nama": "Rachma Rizki Puspita Ismara", "JK": "P" },
        { "No": 25, "Nama": "Reka Erna Wati", "JK": "L" },
        { "No": 26, "Nama": "Rizika Helta", "JK": "P" },
        { "No": 27, "Nama": "Silvia Mega Elana", "JK": "P" },
        { "No": 28, "Nama": "Siti Anisyah", "JK": "P" },
        { "No": 29, "Nama": "Sulaiman Faqih", "JK": "P" },
        { "No": 30, "Nama": "Syakya Ulfa", "JK": "L" },
        { "No": 31, "Nama": "Tiyo Adi Arfian", "JK": "L" },

        { "No": 32, "Nama": "Aditya Dwi Kurniawan", "JK": "L" },
        { "No": 33, "Nama": "Agong Prayogo", "JK": "L" },
        { "No": 34, "Nama": "Agrifio Felixatama", "JK": "L" },
        { "No": 35, "Nama": "Ahmad Khavid", "JK": "L" },
        { "No": 36, "Nama": "Ari Qistiyah", "JK": "P" },
        { "No": 37, "Nama": "Arnanda Silvia", "JK": "P" },
        { "No": 38, "Nama": "Candra Irfan Syah", "JK": "L" },
        { "No": 39, "Nama": "Desy Riris Nurul Aini", "JK": "P" },
        { "No": 40, "Nama": "Dimas Fantoja", "JK": "L" },
        { "No": 41, "Nama": "Dimas Jarod Purwo Subagyo", "JK": "L" },
        { "No": 42, "Nama": "Efi Nursanti", "JK": "P" },
        { "No": 43, "Nama": "Fitria Sam Putri", "JK": "P" },
        { "No": 44, "Nama": "Gabriella Rizky Sugi Davakhos", "JK": "P" },
        { "No": 45, "Nama": "Galuh Tika Agmelia", "JK": "P" },
        { "No": 46, "Nama": "Henny Indah Porwaningsih", "JK": "P" },
        { "No": 47, "Nama": "Imam Mustakim", "JK": "L" },
        { "No": 48, "Nama": "Laras Luckyita Sari", "JK": "P" },
        { "No": 49, "Nama": "Moh. Faiz Hari Lubis", "JK": "L" },
        { "No": 50, "Nama": "Muhamad Faza Aldan Aldiyansyah", "JK": "L" },
        { "No": 51, "Nama": "Muhammad Iqbal Ilyas", "JK": "L" },
        { "No": 52, "Nama": "Novita Ernawati", "JK": "P" },
        { "No": 53, "Nama": "Oki Alfian Akbar", "JK": "L" },
        { "No": 54, "Nama": "Puput Bella Rosada", "JK": "P" },
        { "No": 55, "Nama": "Rahayu Amelia Citra", "JK": "P" },
        { "No": 56, "Nama": "Rizal Adi Prastyo", "JK": "L" },
        { "No": 57, "Nama": "Sekar Rizky Margi Lestari", "JK": "P" },
        { "No": 58, "Nama": "Shinta Surya Ningtyas", "JK": "P" },
        { "No": 59, "Nama": "Tri Cahyoningsih", "JK": "P" },
        { "No": 60, "Nama": "Tri Wulandari", "JK": "P" },
        { "No": 61, "Nama": "Wisnu Adi Nugroho", "JK": "L" },
        { "No": 62, "Nama": "Yuda Dwi Pangestu", "JK": "L" },
        { "No": 63, "Nama": "Raffi Dwika Ahmed Rizkulloh", "JK": "L" },

        { "No": 64, "Nama": "Ahmad Haeikal", "JK": "L" },
        { "No": 65, "Nama": "Ahmad Wirai", "JK": "L" },
        { "No": 66, "Nama": "Albet Adhi Susanto", "JK": "L" },
        { "No": 67, "Nama": "Arya Gita Ananda", "JK": "L" },
        { "No": 68, "Nama": "Ayu Damayanti", "JK": "P" },
        { "No": 69, "Nama": "Danail Firdaus M. Shodiq", "JK": "P" },
        { "No": 70, "Nama": "Dita Ayu Wulandari", "JK": "L" },
        { "No": 71, "Nama": "Doni Hadi Kusuma", "JK": "P" },
        { "No": 72, "Nama": "Erni Puspita Sari", "JK": "L" },
        { "No": 73, "Nama": "Frandy Ali Wafa", "JK": "L" },
        { "No": 74, "Nama": "Haris Supeno", "JK": "P" },
        { "No": 75, "Nama": "Inka Titus Nabila", "JK": "P" },
        { "No": 76, "Nama": "Lelly April Suciani", "JK": "P" },
        { "No": 77, "Nama": "Mariyo", "JK": "P" },
        { "No": 78, "Nama": "Moh. Exsan Vidianto", "JK": "P" },
        { "No": 79, "Nama": "Mohammad Fariq", "JK": "L" },
        { "No": 80, "Nama": "Niken Puspita Aprilianti", "JK": "P" },
        { "No": 81, "Nama": "Nowaf Adam Maulana", "JK": "L" },
        { "No": 82, "Nama": "Rika Zuliyati", "JK": "L" },
        { "No": 83, "Nama": "Ririn Hidayati", "JK": "L" },
        { "No": 84, "Nama": "Rismawati Solikhah", "JK": "P" },
        { "No": 85, "Nama": "Sesario Priambodo", "JK": "L" },
        { "No": 86, "Nama": "Sulis Davit Prayoga", "JK": "P" },
        { "No": 87, "Nama": "Tiara Putri Afifah", "JK": "P" },
        { "No": 88, "Nama": "Tria Amaliya", "JK": "L" },
        { "No": 89, "Nama": "Tria Merliyani", "JK": "P" },
        { "No": 90, "Nama": "Velicia Agnes Sitaningtyas", "JK": "P" },
        { "No": 91, "Nama": "Vina Artha Aulia", "JK": "P" },
        { "No": 92, "Nama": "Wahyu Ningsih", "JK": "P" },
        { "No": 93, "Nama": "Wahyu Nusantoro Aji", "JK": "L" },
        { "No": 94, "Nama": "Yongky Bagus Saputra", "JK": "L" },
        { "No": 95, "Nama": "Zieftyan Catur Puji Rahayu", "JK": "L" }
    ];

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
                     <td class="siswa" data-label="NIS"><span class="alumni-directory-lock">🔒</span></td>
                    <td class="siswa" data-label="SL"><span class="alumni-directory-lock">🔒</span></td>
                    <td class="siswa" data-label="Alamat"><span class="alumni-directory-lock">🔒</span></td>
                    <td class="siswa" data-label="WA/Sosmed"><span class="alumni-directory-lock">🔒</span></td>
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
                        <div class="siswa-card-row"><strong>NIS:</strong> <span><span class="alumni-directory-lock">🔒</span></span></div>
                        <div class="siswa-card-row"><strong>SL:</strong> <span><span class="alumni-directory-lock">🔒</span></span></div>
                        <div class="siswa-card-row"><strong>Alamat:</strong> <span><span class="alumni-directory-lock">🔒</span></span></div>
                        <div class="siswa-card-row"><strong>WA/Sosmed:</strong> <span><span class="alumni-directory-lock">🔒</span></span></div>
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
