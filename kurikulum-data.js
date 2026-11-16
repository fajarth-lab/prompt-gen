/**
 * Database Kurikulum Merdeka Fase D (SMP)
 * Mengacu pada Keputusan Kepala BSKAP Nomor 046/H/KR/2025
 * Mencakup 11 Mata Pelajaran Utama SMP (Kelas VII, VIII, IX - Semester Ganjil & Genap)
 */

const KURIKULUM_DATA = {
  "Bahasa Indonesia": {
    cpUmum: "Pada akhir Fase D, peserta didik memiliki kemampuan berbahasa untuk berkomunikasi dan bernalar sesuai dengan tujuan, konteks sosial, dan akademis. Peserta didik mampu memahami, mengolah, dan menginterpretasi informasi paparan tentang topik yang beragam dan karya sastra; berpartisipasi aktif dalam diskusi, mempresentasikan, dan menanggapi informasi nonfiksi dan fiksi yang dipaparkan; serta menulis berbagai teks untuk menyampaikan pengamatan dan pengalamannya dengan lebih terstruktur dan menuliskan tanggapannya terhadap paparan dan bacaan menggunakan pengalaman dan pengetahuannya.",
    elemen: {
      "Menyimak & Membaca Teks Deskripsi, Narasi & Puisi": {
        cpElemen: "Peserta didik mampu menganalisis dan memaknai informasi berupa gagasan, pikiran, perasaan, pandangan, arahan atau pesan yang tepat dari berbagai jenis teks (nonfiksi dan fiksi) audiovisual dan aural dalam bentuk monolog, dialog, dan gelar wicara.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Teks Deskripsi: Jelajah Pesona Alam & Budaya Nusantara", tp: "Peserta didik mampu menganalisis informasi lisan/tulis, mengidentifikasi majas dan diksi konkret, serta menyajikan teks deskripsi objek wisata/budaya lokal secara bermakna." },
              { judul: "Puisi Rakyat (Pantun, Syair, Gurindam) & Cerita Fantasi", tp: "Peserta didik mampu mengidentifikasi unsur intrinsik dan nilai moral dalam puisi rakyat serta mengembangkan alur cerita fantasi yang kreatif." },
              { judul: "Teks Prosedur: Gaya Hidup Sehat & Kuliner Tradisional", tp: "Peserta didik mampu menelaah struktur dan kaidah kebahasaan teks prosedur serta mempraktikkan penyusunan panduan langkah-langkah secara sistematis." }
            ],
            Genap: [
              { judul: "Teks Berita: Literasi Informasi & Cek Fakta (Anti-Hoaks)", tp: "Peserta didik mampu mengevaluasi keakuratan sumber berita, membedakan fakta dan opini, serta menyusun teks berita aktual secara kritis." },
              { judul: "Buku Fiksi dan Nonfiksi: Bedah Peta Pikiran & Resensi", tp: "Peserta didik mampu membandingkan bagian-bagian buku fiksi dan nonfiksi serta menyusun tanggapan kritis terhadap isi bacaan." },
              { judul: "Surat Pribadi dan Surat Resmi: Etika Komunikasi Santun", tp: "Peserta didik mampu menganalisis perbedaan ragam bahasa surat pribadi dan dinas serta menulis surat dengan struktur dan kesantunan berbahasa." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Teks Laporan Hasil Observasi (LHO) Lingkungan Sekitar", tp: "Peserta didik mampu mengidentifikasi data objektif melalui pengamatan langsung dan menyusun laporan hasil observasi secara ilmiah dan runtut." },
              { judul: "Iklan, Slogan, dan Poster: Persuasi Kreatif & Etis", tp: "Peserta didik mampu menelaah pesan eksplisit dan implisit iklan komersial maupun layanan masyarakat serta merancang poster persuasif." },
              { judul: "Artikel Ilmiah Populer: Mengulas Fenomena Sosial Remaja", tp: "Peserta didik mampu mengidentifikasi fakta, opini, dan bukti pendukung dalam artikel ilmiah populer serta menulis gagasan kritis secara terstruktur." }
            ],
            Genap: [
              { judul: "Karya Fiksi (Cerpen): Analisis Konflik, Watak & Nilai", tp: "Peserta didik mampu mengevaluasi pesan moral, alur, dan penokohan dalam cerpen serta mengaitkannya dengan pengalaman kehidupan nyata." },
              { judul: "Puisi Modern: Diksi Denotasi, Konotasi & Majas", tp: "Peserta didik mampu memaknai diksi denotatif dan konotatif, menafsirkan amanat puisi, serta menciptakan puisi ekspresif." },
              { judul: "Teks Pidato Persuasif: Menyuarakan Gagasan di Depan Publik", tp: "Peserta didik mampu menyusun kerangka pidato persuasif berbasis data dan menyampaikannya dengan artikulasi serta gestur yang meyakinkan." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Teks Tanggapan & Diskusi: Berargumen Secara Logis dan Santun", tp: "Peserta didik mampu mengevaluasi argumen pro dan kontra atas suatu isu aktual serta menyusun teks diskusi dengan penalaran kritis." },
              { judul: "Teks Eksplanasi: Mengurai Fenomena Alam & Sosial", tp: "Peserta didik mampu menganalisis hubungan sebab-akibat dalam teks eksplanasi dan menyajikannya menjadi infografis atau paparan utuh." },
              { judul: "Teks Laporan Percobaan Sederhana", tp: "Peserta didik mampu menyusun laporan percobaan berdasarkan prosedur ilmiah dengan bahasa baku dan objektif." }
            ],
            Genap: [
              { judul: "Teks Rekon (Cerita Pengalaman & Sejarah Tokoh)", tp: "Peserta didik mampu mengidentifikasi urutan peristiwa dan nilai keteladanan dalam teks rekon faktual maupun imajinatif." },
              { judul: "Teks Argumentasi & Rencana Proyek Kewirausahaan Muda", tp: "Peserta didik mampu merancang proposal/teks argumentasi ide kreatif berbasis analisis kebutuhan lingkungan sekitar." },
              { judul: "Apresiasi Drama & Alih Wahana Karya Sastra", tp: "Peserta didik mampu menelaah struktur naskah drama dan mementaskan atau mengalihwahanakan karya sastra secara kolaboratif." }
            ]
          }
        }
      },
      "Berbicara, Mempresentasikan & Menulis Kreatif-Akademik": {
        cpElemen: "Peserta didik mampu menyampaikan gagasan, pikiran, pandangan, arahan atau pesan untuk tujuan pengajuan usul, pemecahan masalah, dan pemberian solusi secara lisan maupun tulis dalam bentuk monolog, dialog logis, dan berbagai struktur teks.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Menyajikan Gagasan Lisan: Storytelling & Mendongeng Nusantara", tp: "Peserta didik mampu menuturkan kembali cerita fantasi/rakyat dengan intonasi, ekspresi, dan alur yang menggugah pendengar." }
            ],
            Genap: [
              { judul: "Debat Mini & Diskusi Kelompok: Memilah Informasi Digital", tp: "Peserta didik mampu menyampaikan pendapat dan sanggahan secara santun berbasis fakta dalam forum diskusi kelas." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Presentasi Multimodal Hasil Observasi & Kampanye Sosial", tp: "Peserta didik mampu mempresentasikan hasil observasi menggunakan media visual secara komunikatif dan menjawab pertanyaan audiens." }
            ],
            Genap: [
              { judul: "Deklamasi Puisi & Orasi Persuasif", tp: "Peserta didik mampu mengekspresikan penghayatan puisi dan menyampaikan pidato persuasif dengan percaya diri." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Forum Diskusi Panel: Isu Lingkungan & Teknologi Remaja", tp: "Peserta didik mampu memoderatori dan berpartisipasi aktif dalam diskusi panel dengan argumen berbasis bukti." }
            ],
            Genap: [
              { judul: "Menulis Esai Reflektif & Proyek Antologi Kelas", tp: "Peserta didik mampu menyunting dan menerbitkan karya tulis reflektif dalam antologi bersama secara kolaboratif." }
            ]
          }
        }
      },
      "Menyimak": {
        cpElemen: "Peserta didik mampu menganalisis dan memaknai informasi berupa gagasan, pikiran, perasaan, pandangan, arahan atau pesan yang tepat dari berbagai jenis teks (nonfiksi dan fiksi) audiovisual dan aural dalam bentuk monolog, dialog, dan gelar wicara.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Menyimak Paparan Deskripsi Objek & Laporan Lisan", tp: "Peserta didik mampu menyimpulkan rincian informasi dari paparan audiovisual secara akurat." }
            ],
            Genap: [
              { judul: "Menyimak Berita Audiovisual & gelar Wicara", tp: "Peserta didik mampu mengidentifikasi pokok berita dan mengevaluasi keakuratan informasi lisan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Menyimak Teks Laporan Hasil Observasi & Wawancara", tp: "Peserta didik mampu mencatat data penting dan fakta dari hasil wawancara narasumber." }
            ],
            Genap: [
              { judul: "Menyimak Pidato Persuasif & Pembacaan Puisi", tp: "Peserta didik mampu menafsirkan pesan persuasif dan suasana batin dalam pembacaan karya sastra." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Menyimak Teks Eksplanasi & Tanggapan Kritis", tp: "Peserta didik mampu menguraikan rangkaian sebab-akibat dari paparan fenomena alam atau sosial." }
            ],
            Genap: [
              { judul: "Menyimak Pementasan Drama & Monolog", tp: "Peserta didik mampu mengevaluasi penokohan, konflik, dan amanat dari pementasan drama." }
            ]
          }
        }
      },
      "Membaca dan Memirsa": {
        cpElemen: "Peserta didik memahami informasi berupa gagasan, pikiran, pandangan, arahan atau pesan dari berbagai jenis teks misalnya teks deskripsi, narasi, puisi, eksplanasi dan eksposisi dari teks visual dan audiovisual untuk menemukan makna yang tersurat dan tersirat.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Memirsa Infografis Prosedur & Membaca Cerita Fantasi", tp: "Peserta didik mampu menafsirkan makna tersurat dan tersirat pada teks visual dan naratif." }
            ],
            Genap: [
              { judul: "Membaca Kritis Teks Berita & Buku Pengayaan", tp: "Peserta didik mampu membandingkan sudut pandang pemberitaan dari beberapa sumber bacaan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Memirsa Poster Iklan Layanan Masyarakat & Artikel Populer", tp: "Peserta didik mampu menganalisis efektivitas visual dan kebahasaan pada media persuasi." }
            ],
            Genap: [
              { judul: "Membaca Intensif Cerpen & Ulasan Karya", tp: "Peserta didik mampu mengkritisi keterkaitan latar sosial dengan konflik tokoh dalam cerpen." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Membaca Laporan Percobaan & Teks Diskusi", tp: "Peserta didik mampu mengevaluasi validitas argumen dan bukti ilmiah dalam bacaan." }
            ],
            Genap: [
              { judul: "Membaca Teks Biografi, Rekon & Teks Argumentasi", tp: "Peserta didik mampu merefleksikan keteladanan tokoh dan struktur argumen dalam teks." }
            ]
          }
        }
      },
      "Berbicara dan Mempresentasikan": {
        cpElemen: "Peserta didik mampu menyampaikan gagasan, pikiran, pandangan, arahan atau pesan untuk tujuan pengajuan usul, pemecahan masalah, dan pemberian solusi secara lisan dalam bentuk monolog dan dialog logis, kritis, dan kreatif.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Presentasi Objek Wisata & Budaya Daerah", tp: "Peserta didik mampu mempresentasikan teks deskripsi dengan pelafalan jelas dan bahasa santun." }
            ],
            Genap: [
              { judul: "Membacakan Berita & Bermain Peran", tp: "Peserta didik mampu menyampaikan informasi secara lisan dengan artikulasi dan intonasi tepat." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Mempresentasikan Hasil Observasi Lingkungan", tp: "Peserta didik mampu menyajikan laporan observasi secara sistematis dan menanggapi pertanyaan." }
            ],
            Genap: [
              { judul: "Berpidato Persuasif & Musikalisasi Puisi", tp: "Peserta didik mampu menyampaikan gagasan persuasif dengan ekspresi dan gestur yang meyakinkan." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Diskusi Terbimbing & Menyampaikan Tanggapan Kritis", tp: "Peserta didik mampu berargumentasi secara logis dan menghargai perbedaan pendapat dalam forum." }
            ],
            Genap: [
              { judul: "Pementasan Drama Pendek & Presentasi Proyek", tp: "Peserta didik mampu berkolaborasi mementaskan naskah drama secara ekspresif." }
            ]
          }
        }
      },
      "Menulis": {
        cpElemen: "Peserta didik mampu menulis gagasan, pikiran, pandangan, arahan atau pesan tertulis untuk berbagai tujuan secara logis, kritis, dan kreatif; serta menuliskan hasil penelitian menggunakan metodologi sederhana dengan mengutip sumber rujukan secara etis.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Menulis Teks Deskripsi, Pantun & Teks Prosedur", tp: "Peserta didik mampu menyusun teks dengan struktur lengkap dan ejaan yang tepat." }
            ],
            Genap: [
              { judul: "Menulis Teks Berita & Surat Resmi/Pribadi", tp: "Peserta didik mampu menyusun teks berita sesuai kaidah ADIKSIMBA dan surat yang santun." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Menulis Laporan Hasil Observasi & Artikel Ilmiah Populer", tp: "Peserta didik mampu menuliskan hasil pengamatan lapangan dan opini berbasis data secara runtut." }
            ],
            Genap: [
              { judul: "Menulis Cerpen, Puisi Modern & Naskah Pidato", tp: "Peserta didik mampu menuangkan imajinasi dan gagasan persuasif dalam bentuk karya tulis utuh." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Menulis Laporan Percobaan, Teks Eksplanasi & Tanggapan", tp: "Peserta didik mampu menyusun laporan ilmiah sederhana dengan pengutipan sumber secara etis." }
            ],
            Genap: [
              { judul: "Menulis Teks Rekon, Argumentasi & Naskah Drama", tp: "Peserta didik mampu menulis berbagai genre teks secara kritis, kreatif, dan reflektif." }
            ]
          }
        }
      }
    }
  },

  "Matematika": {
    cpUmum: "Pada akhir Fase D, peserta didik dapat mengoperasikan bilangan rasional dan bilangan berpangkat, menyelesaikan persamaan dan pertidaksamaan linear satu variabel, sistem persamaan linear dua variabel, relasi dan fungsi, teorema Pythagoras, bangun datar dan bangun ruang sisi datar maupun lengkung, transformasi geometri, kesebangunan dan kekongruenan, serta menganalisis data statistika dan peluang untuk menyelesaikan masalah kontekstual.",
    elemen: {
      "Bilangan & Aljabar": {
        cpElemen: "Peserta didik dapat membaca, menulis, dan membandingkan bilangan bulat, bilangan rasional, bilangan desimal, bilangan berpangkat bulat dan akar, serta menggunakan konsep rasio, persamaan/pertidaksamaan linear, relasi fungsi, dan SPLDV dalam pemecahan masalah nyata.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Bilangan Bulat dan Bilangan Rasional (Pecahan & Desimal)", tp: "Peserta didik mampu menerapkan operasi hitung bilangan bulat dan rasional untuk menyelesaikan masalah kontekstual seperti suhu, ketinggian, dan keuangan harian." },
              { judul: "Rasio dan Proporsi (Perbandingan Senilai & Berbalik Nilai)", tp: "Peserta didik mampu menggunakan konsep rasio, skala peta, dan laju perubahan untuk memecahkan masalah sehari-hari." },
              { judul: "Bentuk Aljabar dan Sifat-Sifat Operasinya", tp: "Peserta didik mampu memodelkan situasi nyata ke dalam bentuk aljabar serta menyederhanakan ekspresi aljabar secara logis." }
            ],
            Genap: [
              { judul: "Persamaan dan Pertidaksamaan Linear Satu Variabel (PLSV/PtLSV)", tp: "Peserta didik mampu merumuskan model matematika dan menyelesaikan persamaan serta pertidaksamaan linear satu variabel dalam konteks kehidupan nyata." },
              { judul: "Aritmetika Sosial: Untung, Rugi, Diskon, Pajak & Bunga", tp: "Peserta didik mampu menganalisis transaksi jual beli, menghitung persentase keuntungan/kerugian, diskon, dan simulasi literasi finansial sederhana." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Bilangan Berpangkat (Eksponen) dan Bentuk Akar", tp: "Peserta didik mampu menggunakan sifat-sifat bilangan berpangkat bulat dan notasi ilmiah untuk merepresentasikan bilangan sangat besar atau sangat kecil." },
              { judul: "Relasi dan Fungsi (Domain, Kodomain, Range & Grafik)", tp: "Peserta didik mampu menyajikan relasi dan fungsi dalam diagram panah, tabel, grafik, dan rumus untuk memodelkan fenomena nyata." },
              { judul: "Persamaan Garis Lurus (Gradien & Grafik Linear)", tp: "Peserta didik mampu menentukan gradien dan persamaan garis lurus serta menggunakannya untuk menganalisis laju perubahan." }
            ],
            Genap: [
              { judul: "Sistem Persamaan Linear Dua Variabel (SPLDV)", tp: "Peserta didik mampu menyelesaikan masalah kontekstual (seperti titik impas usaha/harga paket) menggunakan metode grafik, substitusi, dan eliminasi." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Sistem Persamaan Linear Dua Variabel Lanjutan & Pemodelan", tp: "Peserta didik mampu merancang dan mengevaluasi model matematika berbasis sistem persamaan linear untuk pemecahan masalah kompleks." }
            ],
            Genap: [
              { judul: "Literasi Numerasi & Pemodelan Matematika Lintas Bidang", tp: "Peserta didik mampu mengintegrasikan konsep bilangan, aljabar, dan proporsi untuk menyelesaikan studi kasus nyata." }
            ]
          }
        }
      },
      "Geometri, Pengukuran, Analisis Data & Peluang": {
        cpElemen: "Peserta didik dapat menerapkan teorema Pythagoras, menghitung luas dan volume bangun ruang, melakukan transformasi geometri, membuktikan kekongruenan/kesebangunan, serta menginterpretasi data statistika dan peluang.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Garis, Sudut, dan Hubungan Antar Sudut", tp: "Peserta didik mampu menentukan besar sudut yang terbentuk dari dua garis sejajar yang dipotong garis transversal dalam desain arsitektur/lingkungan." }
            ],
            Genap: [
              { judul: "Segiempat, Segitiga, Lingkaran (Luas & Keliling)", tp: "Peserta didik mampu menghitung keliling dan luas bangun datar serta menerapkannya dalam perencanaan tata ruang atau taman sekolah." },
              { judul: "Penyajian Data & Diagram Statistika (Batang, Garis, Lingkaran)", tp: "Peserta didik mampu mengumpulkan, mengolah, dan menyajikan data lingkungan sekolah ke dalam diagram yang komunikatif serta menarik kesimpulan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Teorema Pythagoras dan Penerapannya", tp: "Peserta didik mampu membuktikan teorema Pythagoras dan menggunakannya untuk menghitung jarak terpendek maupun tinggi objek pada masalah nyata." }
            ],
            Genap: [
              { judul: "Bangun Ruang Sisi Datar (Kubus, Balok, Prisma, Limas)", tp: "Peserta didik mampu menganalisis jaring-jaring, luas permukaan, dan volume bangun ruang sisi datar untuk merancang kemasan produk ramah lingkungan." },
              { judul: "Ukuran Pemusatan & Penyebaran Data (Mean, Median, Modus, Jangkauan)", tp: "Peserta didik mampu menganalisis distribusi data, mendeteksi pencilan (outlier), dan mengambil keputusan berbasis data statistika." },
              { judul: "Peluang Empirik dan Peluang Teoretik", tp: "Peserta didik mampu melakukan percobaan peluang sederhana dan membandingkan frekuensi relatif dengan peluang teoretik." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Bangun Ruang Sisi Lengkung (Tabung, Kerucut, Bola)", tp: "Peserta didik mampu menghitung luas permukaan dan volume bangun ruang sisi lengkung serta gabungan bangun ruang dalam konteks rekayasa sehari-hari." },
              { judul: "Transformasi Geometri (Refleksi, Translasi, Rotasi, Dilatasi)", tp: "Peserta didik mampu menerapkan konsep transformasi geometri pada bidang koordinat dan mengaitkannya dengan pola motif batik/seni lokal." }
            ],
            Genap: [
              { judul: "Kekongruenan dan Kesebangunan Bangun Datar", tp: "Peserta didik mampu menggunakan syarat kesebangunan segitiga untuk memperkirakan tinggi pohon/gedung secara tidak langsung." },
              { judul: "Peluang Kejadian Majemuk Sederhana & Pengambilan Sampel", tp: "Peserta didik mampu mengevaluasi metode pengambilan sampel yang representatif dan menghitung peluang kejadian sederhana." }
            ]
          }
        }
      },
      "Bilangan": {
        cpElemen: "Peserta didik dapat membaca, menulis, dan membandingkan bilangan bulat, bilangan rasional dan irasional, bilangan desimal, bilangan berpangkat bulat dan akar, bilangan dalam notasi ilmiah; serta menerapkan operasi aritmetika pada bilangan real dan rasio.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Bilangan Bulat, FPB & KPK dalam Konteks Nyata", tp: "Peserta didik mampu menyelesaikan masalah penjadwalan dan pembagian menggunakan konsep FPB dan KPK." }
            ],
            Genap: [
              { judul: "Rasio, Skala & Perbandingan Laju Perubahan", tp: "Peserta didik mampu menyelesaikan masalah skala denah dan perbandingan berbalik nilai." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Bilangan Berpangkat Bulat, Bentuk Akar & Notasi Ilmiah", tp: "Peserta didik mampu menyederhanakan operasi bilangan berpangkat dan menuliskannya dalam bentuk baku." }
            ],
            Genap: [
              { judul: "Penerapan Rasio & Bilangan Real dalam Literasi Finansial", tp: "Peserta didik mampu menganalisis perhitungan bunga sederhana dan diskon bertingkat." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Eksponen, Bentuk Akar & Estimasi Bilangan Irasional", tp: "Peserta didik mampu merasionalkan penyebut bentuk akar dan mengestimasi nilai akar kuadrat." }
            ],
            Genap: [
              { judul: "Pemecahan Masalah Numerasi Kompleks Berbasis Bilangan", tp: "Peserta didik mampu mengintegrasikan operasi bilangan real untuk pemecahan masalah multidisiplin." }
            ]
          }
        }
      },
      "Aljabar": {
        cpElemen: "Peserta didik dapat mengenali, memprediksi dan menggeneralisasi pola dalam bentuk susunan benda dan bilangan; menyatakan suatu situasi ke dalam bentuk aljabar; serta menyelesaikan PLSV/PtLSV, relasi fungsi, persamaan garis lurus, dan SPLDV.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Pola Bilangan & Ekspresi Bentuk Aljabar", tp: "Peserta didik mampu menggeneralisasi pola konfigurasi objek ke dalam bentuk aljabar." }
            ],
            Genap: [
              { judul: "Persamaan dan Pertidaksamaan Linear Satu Variabel", tp: "Peserta didik mampu menyelesaikan model matematika PLSV dan PtLSV secara tepat." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Relasi, Fungsi Linear & Persamaan Garis Lurus", tp: "Peserta didik mampu menentukan rumus fungsi dan persamaan garis dari dua titik atau gradien." }
            ],
            Genap: [
              { judul: "Sistem Persamaan Linear Dua Variabel (SPLDV)", tp: "Peserta didik mampu memodelkan dan menyelesaikan SPLDV dengan berbagai metode." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Persamaan Kuadrat & Fungsi Kuadrat (Pengayaan Fase D)", tp: "Peserta didik mampu menganalisis akar persamaan kuadrat dan sketsa grafik parabola sederhana." }
            ],
            Genap: [
              { judul: "Pemodelan Aljabar & Optimasi Masalah Nyata", tp: "Peserta didik mampu merumuskan model aljabar untuk memaksimalkan atau meminimalkan suatu nilai." }
            ]
          }
        }
      },
      "Pengukuran & Geometri": {
        cpElemen: "Peserta didik dapat menjelaskan cara menentukan luas lingkaran, luas permukaan dan volume bangun ruang (prisma, tabung, bola, limas, kerucut); menggunakan hubungan antar-sudut, teorema Pythagoras, transformasi tunggal, serta kekongruenan dan kesebangunan.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Hubungan Antar Sudut pada Garis Sejajar", tp: "Peserta didik mampu menghitung besar sudut sehadap, berseberangan, dan sepihak." }
            ],
            Genap: [
              { judul: "Keliling dan Luas Lingkaran serta Bangun Datar Gabungan", tp: "Peserta didik mampu menghitung luas juring, panjang busur, dan luas bangun datar gabungan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Teorema Pythagoras & Tripel Pythagoras", tp: "Peserta didik mampu menentukan jenis segitiga dan jarak dua titik menggunakan teorema Pythagoras." }
            ],
            Genap: [
              { judul: "Luas Permukaan dan Volume Prisma serta Limas", tp: "Peserta didik mampu menghitung perubahan volume bangun ruang jika ukurannya diperbesar/diperkecil." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Tabung, Kerucut, Bola & Transformasi Geometri", tp: "Peserta didik mampu menyelesaikan masalah bangun ruang sisi lengkung dan bayangan transformasi." }
            ],
            Genap: [
              { judul: "Kekongruenan dan Kesebangunan Segitiga", tp: "Peserta didik mampu membuktikan kesebangunan dua bangun dan menerapkannya pada pengukuran tak langsung." }
            ]
          }
        }
      },
      "Analisis Data dan Peluang": {
        cpElemen: "Peserta didik dapat merumuskan pertanyaan, mengumpulkan, menyajikan, dan menganalisis data untuk menjawab pertanyaan; menggunakan diagram batang dan lingkaran; menentukan ukuran pemusatan dan penyebaran data; serta menjelaskan pengertian peluang dan frekuensi relatif.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Investigasi Statistika & Pengumpulan Data", tp: "Peserta didik mampu merumuskan pertanyaan investigasi dan mengumpulkan data sampel." }
            ],
            Genap: [
              { judul: "Interpretasi Diagram Batang & Diagram Lingkaran", tp: "Peserta didik mampu menyajikan dan membandingkan dua kelompok data menggunakan diagram." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Mean, Median, Modus & Efek Pencilan (Outlier)", tp: "Peserta didik mampu menganalisis pengaruh perubahan data terhadap ukuran pemusatan." }
            ],
            Genap: [
              { judul: "Jangkauan, Kuartil & Peluang Empirik-Teoretik", tp: "Peserta didik mampu menentukan jangkauan interkuartil dan menghitung peluang teoretik kejadian." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Analisis Distribusi Data & Pengambilan Keputusan", tp: "Peserta didik mampu menarik kesimpulan valid berdasarkan perbandingan dua kumpulan data." }
            ],
            Genap: [
              { judul: "Frekuensi Harapan & Simulasi Peluang", tp: "Peserta didik mampu memprediksi frekuensi harapan dari suatu percobaan acak." }
            ]
          }
        }
      }
    }
  },

  "IPA": {
    cpUmum: "Pada akhir Fase D, peserta didik mampu melakukan pengukuran, mengklasifikasikan makhluk hidup dan zat, memahami sistem organisasi kehidupan, interaksi makhluk hidup dengan lingkungannya, gerak dan gaya, usaha dan energi, getaran-gelombang-cahaya, kelistrikan dan kemagnetan, sistem tata surya, serta pewarisan sifat dan bioteknologi melalui penyelidikan ilmiah.",
    elemen: {
      "Pemahaman IPA (Biologi, Fisika, Kimia Terpadu)": {
        cpElemen: "Peserta didik memahami proses identifikasi makhluk hidup, sifat dan perubahan zat, sistem tubuh manusia, ekosistem, gerak dan gaya, energi, gelombang, listrik-magnet, bumi dan antariksa, serta pewarisan sifat dan bioteknologi.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Hakikat Ilmu Sains, Pengukuran & Metode Ilmiah", tp: "Peserta didik mampu merancang percobaan sederhana menggunakan variabel bebas, terikat, dan kontrol serta melakukan pengukuran dengan alat ukur baku." },
              { judul: "Zat dan Perubahannya (Wujud Zat, Perubahan Fisika & Kimia, Massa Jenis)", tp: "Peserta didik mampu menyelidiki perbedaan perubahan fisika dan kimia serta menerapkan konsep massa jenis dalam fenomena terapung-melayang-tenggelam." },
              { judul: "Suhu, Kalor, dan Pemuaian dalam Kehidupan", tp: "Peserta didik mampu menganalisis perpindahan kalor (konduksi, konveksi, radiasi) dan merancang solusi termos sederhana atau isolasi panas." }
            ],
            Genap: [
              { judul: "Gerak dan Gaya (Hukum Newton dalam Aktivitas Sehari-hari)", tp: "Peserta didik mampu menganalisis hubungan gaya, massa, dan percepatan serta menerapkan Hukum I, II, dan III Newton pada keselamatan berkendara." },
              { judul: "Klasifikasi Makhluk Hidup & Keanekaragaman Hayati", tp: "Peserta didik mampu menggunakan kunci dikotomi untuk mengklasifikasikan makhluk hidup di lingkungan sekolah dan memahami pentingnya konservasi." },
              { judul: "Ekologi, Interaksi Ekosistem & Mitigasi Perubahan Iklim", tp: "Peserta didik mampu menganalisis aliran energi, jaring-jaring makanan, dan dampak aktivitas manusia terhadap keseimbangan ekosistem lokal." },
              { judul: "Bumi dan Tata Surya (Rotasi, Revolusi & Gerhana)", tp: "Peserta didik mampu memodelkan gerak bumi dan bulan terhadap matahari serta menjelaskan dampaknya terhadap musim, pasang surut, dan gerhana." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Pengenalan Sel dan Mikroskop (Struktur Sel Hewan & Tumbuhan)", tp: "Peserta didik mampu menggunakan mikroskop untuk mengamati struktur sel dan membandingkan fungsi organel sel hewan serta tumbuhan." },
              { judul: "Struktur dan Fungsi Tubuh Makhluk Hidup (Sistem Pencernaan, Peredaran Darah, Pernapasan & Ekskresi)", tp: "Peserta didik mampu menganalisis keterkaitan antar sistem organ manusia dan merancang pola hidup sehat untuk mencegah gangguan organ." },
              { judul: "Usaha, Energi, dan Pesawat Sederhana", tp: "Peserta didik mampu menyelidiki prinsip kerja tuas, bidang miring, dan katrol untuk mempermudah pekerjaan manusia secara ergonomis." }
            ],
            Genap: [
              { judul: "Getaran, Gelombang, Bunyi, dan Cahaya (Alat Optik)", tp: "Peserta didik mampu menyelidiki sifat pemantulan dan pembiasan cahaya serta prinsip kerja mata dan alat optik dalam kehidupan." },
              { judul: "Unsur, Senyawa, Campuran & Pemisahan Campuran", tp: "Peserta didik mampu membedakan unsur, senyawa, dan campuran serta mempraktikkan metode penjernihan air sederhana (filtrasi/distilasi)." },
              { judul: "Struktur Bumi dan Mitigasi Bencana Alam (Gempa & Gunung Api)", tp: "Peserta didik mampu menganalisis dinamika lempeng tektonik dan merancang prosedur kesiapsiagaan bencana gempa bumi di sekolah." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Pertumbuhan dan Perkembangan Makhluk Hidup", tp: "Peserta didik mampu merancang penyelidikan faktor eksternal dan internal yang memengaruhi pertumbuhan tanaman." },
              { judul: "Sistem Koordinasi, Reproduksi, dan Homeostasis Manusia", tp: "Peserta didik mampu menjelaskan mekanisme kerja sistem saraf, hormon, dan reproduksi manusia serta pentingnya menjaga kesehatan reproduksi." },
              { judul: "Tekanan Zat Padat, Cair (Hukum Archimedes & Pascal), dan Gas", tp: "Peserta didik mampu menerapkan konsep tekanan hidrostatis dan hukum Pascal pada desain alat teknologi sederhana (dongkrak hidrolik/kapal selam mini)." },
              { judul: "Listrik Statis, Listrik Dinamis & Hemat Energi Listrik", tp: "Peserta didik mampu merangkai rangkaian listrik seri-paralel, menghitung daya listrik rumah tangga, dan merancang audit hemat energi." }
            ],
            Genap: [
              { judul: "Kemagnetan dan Induksi Elektromagnetik", tp: "Peserta didik mampu menyelidiki sifat medan magnet, membuat elektromagnet sederhana, dan menjelaskan prinsip kerja generator/transformator." },
              { judul: "Reaksi-Reaksi Kimia dan Dinamikanya (Asam, Basa, Garam)", tp: "Peserta didik mampu menguji sifat larutan asam-basa menggunakan indikator alami dan menganalisis reaksi kimia dalam kehidupan sehari-hari." },
              { judul: "Pewarisan Sifat (Genetika Mendel) dan Bioteknologi Konvensional-Modern", tp: "Peserta didik mampu memprediksi persilangan monohibrid/dihibrid sederhana serta mempraktikkan pembuatan produk bioteknologi pangan konvensional." }
            ]
          }
        }
      },
      "Keterampilan Proses Inkuiri Sains": {
        cpElemen: "Peserta didik mampu mengamati, mempertanyakan dan memprediksi, merencanakan dan melakukan penyelidikan, memproses dan menganalisis data, mengevaluasi dan refleksi, serta mengomunikasikan hasil penyelidikan.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Proyek Mini Inkuiri: Pengukuran & Pengamatan Fenomena Alam", tp: "Peserta didik mampu merumuskan hipotesis, mengumpulkan data kuantitatif, dan menyajikan laporan eksperimen secara jujur." }
            ],
            Genap: [
              { judul: "Investigasi Kualitas Air & Ekosistem Sekolah", tp: "Peserta didik mampu menyelidiki indikator biotik dan abiotik di lingkungan sekolah serta mengusulkan solusi pelestarian." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Rekayasa Pesawat Sederhana Tepat Guna", tp: "Peserta didik mampu merancang dan menguji purwarupa pesawat sederhana untuk menyelesaikan masalah angkut beban." }
            ],
            Genap: [
              { judul: "Eksperimen Penjernihan Air Ramah Lingkungan", tp: "Peserta didik mampu merancang alat filtrasi air sederhana dan mengevaluasi kejernihan serta pH air hasil saringan." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Audit Konsumsi Energi Listrik Rumah Tangga", tp: "Peserta didik mampu menghitung estimasi pemakaian kWh peralatan rumah tangga dan menyusun strategi efisiensi energi." }
            ],
            Genap: [
              { judul: "Proyek Bioteknologi Pangan Lokal (Fermentasi)", tp: "Peserta didik mampu melakukan eksperimen fermentasi pangan lokal dengan prosedur higienis dan menganalisis faktor keberhasilannya." }
            ]
          }
        }
      }
    }
  },

  "IPS": {
    cpUmum: "Pada akhir Fase D, peserta didik memahami keberagaman kondisi geografis Indonesia, konektivitas antarruang, interaksi sosial dan dinamika perubahan sosial budaya, kegiatan ekonomi dan pemenuhan kebutuhan, peran lembaga sosial, sejarah peradaban Nusantara hingga kemerdekaan, serta pembangunan berkelanjutan dan literasi finansial.",
    elemen: {
      "Pemahaman Konsep & Keterampilan Proses IPS": {
        cpElemen: "Peserta didik mampu memahami dan menerapkan materi pembelajaran melalui pendekatan keterampilan proses dalam belajarnya, yaitu mengamati, menanya dengan rumus 5W 1H, memperkirakan apa yang terjadi berdasarkan jawaban sementara, mengumpulkan informasi, mengolah informasi, dan mengomunikasikan.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Keluarga Awal Kehidupan: Sejarah Diri, Lokasi & Sosialisasi", tp: "Peserta didik mampu menganalisis silsilah keluarga, membaca komponen peta wilayah tempat tinggal, dan menjelaskan proses sosialisasi nilai." },
              { judul: "Keberagaman Lingkungan Sekitar & Aktivitas Pemenuhan Kebutuhan", tp: "Peserta didik mampu mengidentifikasi pembiasaan melestarikan sumber daya udara, air, tanah serta menganalisis kelangkaan dan skala prioritas kebutuhan." }
            ],
            Genap: [
              { judul: "Potensi Ekonomi Lingkungan & Sejarah Peradaban Nusantara", tp: "Peserta didik mampu menganalisis potensi sumber daya alam lokal, kegiatan produksi-distribusi-konsumsi, serta jejak kerajaan Hindu-Buddha dan Islam." },
              { judul: "Pemberdayaan Masyarakat: Keragaman Sosial Budaya & Literasi Keuangan", tp: "Peserta didik mampu merancang pengelolaan uang saku/tabungan (literasi finansial) dan mengusulkan solusi atas permasalahan sosial di lingkungan sekitar." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Kondisi Geografis dan Pelestarian Sumber Daya Alam Indonesia", tp: "Peserta didik mampu menganalisis pengaruh letak geografis dan geologis Indonesia terhadap keragaman alam, iklim, dan kualitas sumber daya manusia." },
              { judul: "Kemajemukan Masyarakat Indonesia: Mobilitas Sosial & Integrasi", tp: "Peserta didik mampu menganalisis bentuk-bentuk mobilitas sosial, keragaman budaya/agama, dan strategi merawat harmoni dalam masyarakat majemuk." }
            ],
            Genap: [
              { judul: "Nasionalisme dan Jati Diri Bangsa (Kedatangan Bangsa Barat hingga Pergerakan Nasional)", tp: "Peserta didik mampu menganalisis latar belakang kolonialisme, perlawanan daerah, lahirnya organisasi pergerakan nasional, dan Sumpah Pemuda." },
              { judul: "Pembangunan Perekonomian Indonesia & Perdagangan Antarpulau/Internasional", tp: "Peserta didik mampu menganalisis peran pelaku ekonomi, ekspor-impor, serta dampak perkembangan ekonomi digital terhadap UMKM lokal." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Manusia dan Perubahan: Perubahan Sosial Budaya & Modernisasi", tp: "Peserta didik mampu menganalisis faktor pendorong dan penghambat perubahan sosial budaya serta menyikapi arus globalisasi secara kritis tanpa kehilangan jati diri." },
              { judul: "Perkembangan Ekonomi Digital dan Literasi Finansial Lanjutan", tp: "Peserta didik mampu mengevaluasi peluang dan risiko transaksi digital (e-commerce, dompet digital, pinjaman daring) serta merancang prinsip investasi aman." }
            ],
            Genap: [
              { judul: "Tantangan Pembangunan Indonesia (Dari Masa Kemerdekaan hingga Reformasi)", tp: "Peserta didik mampu menganalisis dinamika pembangunan ekonomi dan sosial Indonesia dari awal kemerdekaan hingga masa kini." },
              { judul: "Kerja Sama Dunia & Tujuan Pembangunan Berkelanjutan (SDGs)", tp: "Peserta didik mampu menganalisis peran Indonesia dalam kerja sama regional/global (ASEAN, PBB) dan merancang aksi nyata mendukung SDGs di sekolah." }
            ]
          }
        }
      },
      "Pemahaman Konsep IPS (Geografi, Sejarah, Sosiologi, Ekonomi)": {
        cpElemen: "Peserta didik memahami konektivitas antarruang dan waktu, interaksi sosial serta peran lembaga sosial, pemenuhan kebutuhan dan aktivitas ekonomi, serta perkembangan masyarakat Nusantara hingga masa kontemporer.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Pemetaan Wilayah Lokal & Interaksi Sosial di Masyarakat", tp: "Peserta didik mampu membuat sketsa peta wilayah sekitar dan menganalisis bentuk interaksi asosiatif maupun disosiatif." }
            ],
            Genap: [
              { judul: "Permintaan, Penawaran, Harga Pasar & Lembaga Sosial", tp: "Peserta didik mampu menjelaskan mekanisme terbentuknya harga pasar dan fungsi lembaga keluarga, agama, ekonomi, serta pendidikan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Pemanfaatan Sumber Daya Alam Berkelanjutan & Konflik-Integrasi Sosial", tp: "Peserta didik mampu mengevaluasi pemanfaatan potensi kemaritiman/kehutanan dan merumuskan solusi pencegahan konflik sosial." }
            ],
            Genap: [
              { judul: "Perjuangan Kemerdekaan & Peran Lembaga Keuangan Bank/Nonbank", tp: "Peserta didik mampu menganalisis makna proklamasi kemerdekaan dan fungsi perbankan dalam perekonomian." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Dampak Globalisasi Budaya & Transformasi Sistem Pembayaran", tp: "Peserta didik mampu membandingkan alat pembayaran tunai dan nontunai serta mengantisipasi ancaman kejahatan finansial digital." }
            ],
            Genap: [
              { judul: "Potensi Indonesia Menjadi Negara Maju & Kerja Sama Internasional", tp: "Peserta didik mampu menganalisis indikator negara maju dan peluang bonus demografi Indonesia." }
            ]
          }
        }
      },
      "Keterampilan Proses Inkuiri Sosial": {
        cpElemen: "Peserta didik mampu mengamati fenomena sosial, merumuskan pertanyaan penelitian sosial sederhana, mengumpulkan data melalui wawancara/observasi, mengolah data, dan mempresentasikan solusi.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Observasi Sejarah Lisan Keluarga & Lingkungan", tp: "Peserta didik mampu melakukan wawancara sederhana terhadap tokoh keluarga/lingkungan dan menyusun narasi sejarah lokal." }
            ],
            Genap: [
              { judul: "Survei Potensi Ekonomi Kreatif di Lingkungan Sekolah", tp: "Peserta didik mampu mengidentifikasi peluang usaha kecil di sekitar sekolah dan menyusun laporan pengamatan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Investigasi Keberagaman Budaya & Kearifan Lokal Daerah", tp: "Peserta didik mampu mendokumentasikan kearifan lokal pelestarian alam di daerahnya." }
            ],
            Genap: [
              { judul: "Studi Kasus Dinamika UMKM Lokal di Era Digital", tp: "Peserta didik mampu mewawancarai pelaku UMKM sekitar terkait tantangan pemasaran digital." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Riset Mini Gaya Hidup Digital & Literasi Keuangan Remaja", tp: "Peserta didik mampu mengolah data survei kebiasaan belanja daring teman sebaya." }
            ],
            Genap: [
              { judul: "Proyek Aksi Sosial Mendukung SDGs di Lingkungan Sekolah", tp: "Peserta didik mampu merancang dan mempresentasikan kampanye sosial berbasis masalah nyata di sekolah." }
            ]
          }
        }
      }
    }
  },

  "Bahasa Inggris": {
    cpUmum: "Pada akhir Fase D, peserta didik menggunakan teks lisan, tulisan, dan visual dalam bahasa Inggris untuk berinteraksi dan berkomunikasi dalam konteks yang lebih beragam dan dalam situasi formal dan informal. Peserta didik dapat menggunakan berbagai jenis teks seperti narasi, deskripsi, prosedur, teks khusus (pesan singkat, iklan), dan teks otentik menjadi rujukan utama dalam mempelajari bahasa Inggris di fase ini.",
    elemen: {
      "Menyimak - Berbicara & Membaca - Memirsa & Menulis - Mempresentasikan": {
        cpElemen: "Peserta didik menggunakan bahasa Inggris untuk berinteraksi dan saling bertukar ide, pengalaman, minat, pendapat dan pandangan dengan guru, teman sebaya dan orang lain dalam berbagai macam konteks familiar yang formal dan informal.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "About Me: Introducing Self, Hobbies, and Daily Routines", tp: "Students are able to introduce themselves and others, describe hobbies, and talk about daily habits using Simple Present Tense in meaningful interactions." },
              { judul: "Culinary and Me: Describing Favorite Foods & Recipes (Procedure Text)", tp: "Students are able to identify ingredients, utensils, and action verbs to describe favorite local dishes and write a simple recipe." }
            ],
            Genap: [
              { judul: "Home Sweet Home: Describing Rooms & House Chores", tp: "Students are able to describe rooms in a house, locate objects using prepositions of place, and talk about cleaning routines." },
              { judul: "My School Activities: Class Schedules & Study Habits", tp: "Students are able to ask for and give information about school subjects, schedules, and effective study tips." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Celebrating Independence Day: Recounting Past Experiences (Simple Past Tense)", tp: "Students are able to recount personal experiences and school events in chronological order using regular and irregular past verbs." },
              { judul: "Kindness Begins with Me: Narrative Text & Moral Values", tp: "Students are able to identify characters, settings, conflicts, and moral lessons in fables or folk tales and retell the story creatively." }
            ],
            Genap: [
              { judul: "Love Our World: Saving Water, Energy & Anti-Littering Posters", tp: "Students are able to give instructions, express opinions on environmental issues, and design persuasive eco-friendly posters." },
              { judul: "No Littering & Empathy: Short Messages, Notices & Dialogues", tp: "Students are able to interpret public notices/signs and create short empathetic messages in real-life school contexts." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Exploring Fauna of Indonesia: Report Text & Conservation", tp: "Students are able to analyze factual information in report texts about Indonesian endemic animals and present a conservation campaign." },
              { judul: "Taking Trips: Recount Text & Travel Itinerary", tp: "Students are able to describe memorable holiday trips, compare destinations, and plan a sustainable travel itinerary." }
            ],
            Genap: [
              { judul: "Journey to Fantasy Worlds: Narrative Text & Critical Reflection", tp: "Students are able to analyze plot twists and character motivations in imaginative stories and write an alternative ending." },
              { judul: "Upcycling Used Materials & Digital Literacy: Procedure & Descriptive Texts", tp: "Students are able to explain how to upcycle waste into useful crafts and evaluate online information responsibly." }
            ]
          }
        }
      },
      "Menyimak - Berbicara (Listening - Speaking)": {
        cpElemen: "Peserta didik menggunakan bahasa Inggris untuk berinteraksi dan saling bertukar ide, pengalaman, minat, pendapat dan pandangan dengan guru, teman sebaya dan orang lain dalam berbagai macam konteks familiar yang formal dan informal.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Greeting, Leave-Taking & Asking for Personal Information", tp: "Students are able to initiate and maintain simple transactional conversations politely." }
            ],
            Genap: [
              { judul: "Asking and Giving Directions Around School", tp: "Students are able to ask for and give clear directions to places around the school." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Sharing Unforgettable School Competition Stories", tp: "Students are able to ask and answer questions about past events using Wh-questions." }
            ],
            Genap: [
              { judul: "Expressing Opinions, Agreement, and Disagreement", tp: "Students are able to express simple opinions and respond politely in group discussions." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Presenting Wildlife Conservation Campaigns", tp: "Students are able to deliver a structured spoken presentation about endangered Indonesian species." }
            ],
            Genap: [
              { judul: "Roleplay: Digital Safety & Fact-Checking Discussions", tp: "Students are able to discuss online safety tips and give advice using modal verbs." }
            ]
          }
        }
      },
      "Membaca - Memirsa (Reading - Viewing)": {
        cpElemen: "Peserta didik membaca dan merespons teks familiar dan tidak familiar yang mengandung struktur yang telah dipelajari dan kosakata yang familiar secara mandiri; mencari dan mengevaluasi ide utama dan informasi spesifik dalam berbagai jenis teks cetak maupun digital.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Reading Descriptive Profiles & Food Labels", tp: "Students are able to find specific details and main ideas in short descriptive texts and nutrition labels." }
            ],
            Genap: [
              { judul: "Reading School Announcements & Timetables", tp: "Students are able to interpret schedules and school notices accurately." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Reading Folktales & Fables (Orientation, Complication, Resolution)", tp: "Students are able to analyze story structure and infer implicit moral values." }
            ],
            Genap: [
              { judul: "Viewing Environmental Infographics & Public Signs", tp: "Students are able to evaluate multimodal texts related to water and energy conservation." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Reading Scientific Report Texts & Travel Blogs", tp: "Students are able to distinguish general classification from detailed descriptions in report texts." }
            ],
            Genap: [
              { judul: "Reading DIY Upcycling Guides & Digital Articles", tp: "Students are able to follow multi-step procedural texts and identify credible information." }
            ]
          }
        }
      },
      "Menulis - Mempresentasikan (Writing - Presenting)": {
        cpElemen: "Peserta didik mengomunikasikan ide dan pengalaman mereka melalui paragraf sederhana dan terstruktur, menunjukkan perkembangan dalam penggunaan kosakata spesifik dan struktur kalimat sederhana; serta membuat perencanaan, menulis, dan menyajikan teks informasi, imajinasi, dan persuasi.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Writing a Descriptive Paragraph & Simple Recipe", tp: "Students are able to draft, revise, and present a descriptive text or procedural recipe with appropriate punctuation." }
            ],
            Genap: [
              { judul: "Creating a Dream House Floor Plan & Study Poster", tp: "Students are able to write structured sentences describing rooms and study routines." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Writing a Personal Recount Diary & Illustrated Story", tp: "Students are able to organize past events using time connectives (first, then, finally)." }
            ],
            Genap: [
              { judul: "Designing Persuasive Eco-Posters & Short Messages", tp: "Students are able to write clear imperative sentences and persuasive captions." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Writing a Factual Report on Local Flora/Fauna", tp: "Students are able to compose a well-structured report text using passive voice and technical vocabulary." }
            ],
            Genap: [
              { judul: "Writing an Alternative Story Ending & Upcycling Tutorial", tp: "Students are able to produce creative narrative endings and step-by-step procedural guides." }
            ]
          }
        }
      }
    }
  },

  "Pendidikan Pancasila": {
    cpUmum: "Pada akhir Fase D, peserta didik memahami sejarah kelahiran Pancasila, kedudukan Pancasila sebagai dasar negara, pandangan hidup bangsa, dan ideologi negara; menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari; memahami norma dan UUD NRI Tahun 1945; menghargai keberagaman dalam bingkai Bhinneka Tunggal Ika; serta menjaga keutuhan wilayah NKRI.",
    elemen: {
      "Pancasila, UUD NRI Tahun 1945, Bhinneka Tunggal Ika & NKRI": {
        cpElemen: "Peserta didik mampu menganalisis kronologis lahirnya Pancasila, menerapkan nilai Pancasila, mematuhi norma dan aturan, mengidentifikasi keberagaman suku, agama, ras, antargolongan, serta menunjukkan perilaku menjaga keutuhan NKRI.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Sejarah Kelahiran Pancasila dan Perumusannya oleh Para Pendiri Bangsa", tp: "Peserta didik mampu menelaah proses perumusan Pancasila dalam sidang BPUPKI dan PPKI serta meneladani semangat musyawarah para pendiri bangsa." },
              { judul: "Norma dan UUD NRI Tahun 1945 dalam Kehidupan Bermasyarakat", tp: "Peserta didik mampu membedakan macam-macam norma (agama, kesusilaan, kesopanan, hukum) dan menerapkannya untuk menciptakan ketertiban di sekolah." }
            ],
            Genap: [
              { judul: "Keberagaman Masyarakat Indonesia dalam Bingkai Bhinneka Tunggal Ika", tp: "Peserta didik mampu menghargai keragaman gender, suku, budaya, agama, dan antargolongan serta menolak perundungan dan diskriminasi." },
              { judul: "Wilayah Negara Kesatuan Republik Indonesia (NKRI) & Gotong Royong", tp: "Peserta didik mampu mengidentifikasi karakteristik wilayah Indonesia sebagai negara kepulauan dan mempraktikkan budaya gotong royong di lingkungan sekitar." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Kedudukan dan Fungsi Pancasila (Dasar Negara, Pandangan Hidup & Ideologi)", tp: "Peserta didik mampu menganalisis makna Pancasila sebagai dasar negara dan pandangan hidup bangsa serta mempraktikkannya dalam pengambilan keputusan sehari-hari." },
              { judul: "Bentuk dan Kedaulatan Negara serta Tata Urutan Peraturan Perundang-undangan", tp: "Peserta didik mampu menjelaskan sistem pemerintahan Indonesia dan hierarki peraturan perundang-undangan nasional secara kritis." }
            ],
            Genap: [
              { judul: "Tata Negara dan Pemerintahan Daerah (Otonomi Daerah)", tp: "Peserta didik mampu mengidentifikasi lembaga-lembaga negara serta peran pemerintahan daerah dalam melayani masyarakat." },
              { judul: "Kebangkitan Nasional, Sumpah Pemuda, dan Jati Diri Budaya Nasional", tp: "Peserta didik mampu menganalisis nilai persatuan pemuda tahun 1908 dan 1928 serta melestarikan kearifan lokal di era digital." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Hubungan Pancasila dengan UUD NRI Tahun 1945, Bhinneka Tunggal Ika, dan NKRI", tp: "Peserta didik mampu menganalisis keterkaitan organis antara pembukaan UUD 1945 dengan pokok-pokok pikiran Pancasila." },
              { judul: "Hak dan Kewajiban Warga Negara dalam Kehidupan Berdemokrasi", tp: "Peserta didik mampu menyeimbangkan pelaksanaan hak dan kewajiban warga negara secara bertanggung jawab di lingkungan sekolah dan masyarakat." }
            ],
            Genap: [
              { judul: "Kemerdekaan Berpendapat Warga Negara pada Era Keterbukaan Informasi", tp: "Peserta didik mampu menyalurkan kebebasan berpendapat di ruang publik maupun media sosial secara etis, santun, dan sesuai hukum." },
              { judul: "Menjaga Keutuhan Wilayah NKRI & Peran Indonesia di Kancah Global", tp: "Peserta didik mampu mengidentifikasi tantangan keutuhan NKRI dan merancang proyek aksi bela negara sesuai kapasitas pelajar." }
            ]
          }
        }
      },
      "Pancasila": {
        cpElemen: "Peserta didik memahami sejarah kelahiran Pancasila; memahami kedudukan Pancasila sebagai dasar negara, pandangan hidup bangsa, dan ideologi negara; serta menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Proses Perumusan dan Penetapan Pancasila sebagai Dasar Negara", tp: "Peserta didik mampu menguraikan dinamika sidang BPUPKI, Piagam Jakarta, hingga pengesahan Pancasila oleh PPKI." }
            ],
            Genap: [
              { judul: "Penerapan Nilai-Nilai Sila Pancasila di Lingkungan Sekolah", tp: "Peserta didik mampu mengimplementasikan nilai ketuhanan, kemanusiaan, persatuan, kerakyatan, dan keadilan dalam keseharian." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Pancasila sebagai Dasar Negara, Pandangan Hidup & Ideologi Terbuka", tp: "Peserta didik mampu membedakan fungsi Pancasila dalam penyelenggaraan negara dan kehidupan bermasyarakat." }
            ],
            Genap: [
              { judul: "Membiasakan Perilaku Sesuai Nilai Pancasila di Era Digital", tp: "Peserta didik mampu mengevaluasi tantangan penerapan nilai Pancasila di media sosial." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Dinamika Perwujudan Pancasila dari Masa ke Masa", tp: "Peserta didik mampu menganalisis tantangan dan upaya mempertahankan Pancasila sebagai ideologi bangsa." }
            ],
            Genap: [
              { judul: "Proyek Pengamalan Nilai Pancasila dalam Pemecahan Masalah Sosial", tp: "Peserta didik mampu merancang aksi nyata berbasis nilai Pancasila di lingkungan masyarakat." }
            ]
          }
        }
      },
      "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945": {
        cpElemen: "Peserta didik menerapkan norma dan aturan; menerapkan hak dan kewajiban sebagai warga negara; memahami sejarah, fungsi, dan kedudukan UUD NRI Tahun 1945; serta mempraktikkan kemerdekaan berpendapat sebagai warga negara dalam era keterbukaan informasi.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Norma dalam Masyarakat & Perumusan UUD NRI Tahun 1945", tp: "Peserta didik mampu menganalisis pentingnya kepatuhan terhadap norma dan konstitusi." }
            ],
            Genap: [
              { judul: "Kesepakatan Bersama & Tata Tertib Sekolah sebagai Wujud Konstitusionalisme", tp: "Peserta didik mampu berpartisipasi dalam menyusun aturan kelas secara demokratis." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Kedudukan UUD NRI Tahun 1945 & Tata Urutan Peraturan Perundang-undangan", tp: "Peserta didik mampu mengidentifikasi jenis dan hierarki peraturan perundang-undangan menurut UU No. 12 Tahun 2011." }
            ],
            Genap: [
              { judul: "Kepatuhan terhadap Hukum & Budaya Taat Aturan", tp: "Peserta didik mampu menganalisis dampak pelanggaran aturan lalu lintas dan peraturan sekolah." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Makna Alinea Pembukaan UUD NRI Tahun 1945 & Hak-Kewajiban Warga Negara", tp: "Peserta didik mampu menganalisis jaminan hak asasi dan kewajiban warga negara dalam pasal-pasal UUD 1945." }
            ],
            Genap: [
              { judul: "Kemerdekaan Berpendapat & Literasi Hukum di Era Digital", tp: "Peserta didik mampu mempraktikkan penyampaian aspirasi secara bertanggung jawab sesuai ketentuan hukum." }
            ]
          }
        }
      },
      "Bhinneka Tunggal Ika": {
        cpElemen: "Peserta didik mengidentifikasi keberagaman suku, agama, ras dan antargolongan dalam bingkai Bhinneka Tunggal Ika, dan mampu menerima keragaman dan perubahan budaya sebagai suatu kenyataan yang ada di dalam kehidupan bermasyarakat.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Mengenali Keberagaman Suku, Agama, Ras, dan Antargolongan (SARA)", tp: "Peserta didik mampu memetakan kekayaan budaya nusantara dan menumbuhkan sikap saling menghormati." }
            ],
            Genap: [
              { judul: "Merawat Toleransi & Mencegah Perundungan di Sekolah", tp: "Peserta didik mampu merancang kampanye anti-intoleransi dan anti-perundungan berbasis Bhinneka Tunggal Ika." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Pelestarian Tradisi, Kearifan Lokal & Budaya Nasional", tp: "Peserta didik mampu mengidentifikasi upaya pelestarian budaya daerah di tengah arus globalisasi." }
            ],
            Genap: [
              { judul: "Harmonisasi dalam Masyarakat Majemuk", tp: "Peserta didik mampu menganalisis cara menyelesaikan potensi gesekan sosial melalui dialog inklusif." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Prinsip Persatuan dalam Keberagaman & Kesetaraan Gender", tp: "Peserta didik mampu mengevaluasi pentingnya prinsip nasionalisme inklusif dalam masyarakat multikultural." }
            ],
            Genap: [
              { judul: "Proyek Pertukaran Budaya & Festival Kebinekaan Sekolah", tp: "Peserta didik mampu berkolaborasi menampilkan kekayaan budaya Nusantara secara kreatif." }
            ]
          }
        }
      },
      "Negara Kesatuan Republik Indonesia": {
        cpElemen: "Peserta didik memahami karakteristik wilayah Negara Kesatuan Republik Indonesia; memahami sistem pertahanan dan keamanan negara; serta menganalisis peran Indonesia dalam hubungan antarbangsa dan menjaga keutuhan wilayah NKRI.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Karakteristik Wilayah NKRI & Wawasan Nusantara", tp: "Peserta didik mampu menjelaskan batas-batas wilayah dan kekayaan maritim serta agraris Indonesia." }
            ],
            Genap: [
              { judul: "Budaya Gotong Royong dalam Memperkokoh Persatuan", tp: "Peserta didik mampu mempraktikkan kegiatan gotong royong di lingkungan sekolah dan masyarakat." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Bentuk Negara Kesatuan & Penyelenggaraan Pemerintahan Daerah", tp: "Peserta didik mampu menjelaskan hubungan pemerintah pusat dan daerah dalam kerangka NKRI." }
            ],
            Genap: [
              { judul: "Semangat Kebangkitan Nasional & Sumpah Pemuda untuk Keutuhan NKRI", tp: "Peserta didik mampu merefleksikan peran generasi muda dalam menjaga persatuan bangsa." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata)", tp: "Peserta didik mampu menjelaskan peran TNI, Polri, dan warga negara dalam upaya bela negara." }
            ],
            Genap: [
              { judul: "Komitmen Menjaga Keutuhan Wilayah NKRI & Peran Perdamaian Dunia", tp: "Peserta didik mampu menganalisis ancaman terhadap kedaulatan negara dan peran aktif Indonesia di ASEAN serta PBB." }
            ]
          }
        }
      }
    }
  },

  "Informatika": {
    cpUmum: "Pada akhir Fase D, peserta didik mampu menerapkan berpikir komputasional untuk menghasilkan beberapa solusi dari persoalan dengan data diskrit bervolume kecil, mendisposisikan berpikir komputasional dalam bidang lain terutama dalam literasi, numerasi, dan literasi sains, memanfaatkan aplikasi perkantoran, memahami cara kerja sistem komputer dan jaringan internet, menganalisis data, merancang program visual/tekstual sederhana, serta memahami dampak sosial informatika dan kecerdasan artifisial.",
    elemen: {
      "Berpikir Komputasional, TIK, Sistem Komputer, Jaringan & Algoritma Pemrograman": {
        cpElemen: "Peserta didik mampu menerapkan berpikir komputasional (dekomposisi, pengenalan pola, abstraksi, algoritma), mengelola file dan aplikasi perkantoran, memahami komponen komputer dan keamanan digital, serta membuat program blok visual (Scratch/Blockly).",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Berpikir Komputasional: Algoritma, Optimasi Penjadwalan & Struktur Data", tp: "Peserta didik mampu memecahkan persoalan sehari-hari menggunakan pendekatan dekomposisi, pengenalan pola, abstraksi, dan penyusunan algoritma." },
              { judul: "Teknologi Informasi dan Komunikasi (TIK): Manajemen File & Pengolah Kata/Presentasi", tp: "Peserta didik mampu mengelola struktur folder secara rapi dan memproduksi dokumen serta paparan visual yang efektif." }
            ],
            Genap: [
              { judul: "Sistem Komputer & Jaringan Internet Dasar (Keamanan Data)", tp: "Peserta didik mampu menjelaskan fungsi perangkat keras, perangkat lunak, sistem biner dasar, serta cara mengamankan akun pribadi di internet." },
              { judul: "Analisis Data Dasar (Pengolahan Tabel & Visualisasi Grafik)", tp: "Peserta didik mampu mengolah data sederhana menggunakan aplikasi lembar kerja (spreadsheet) untuk menyaring, mengurutkan, dan memvisualisasikan informasi." },
              { judul: "Algoritma dan Pemrograman Visual Dasar (Scratch)", tp: "Peserta didik mampu merancang program animasi atau permainan edukatif sederhana menggunakan blok pemrograman visual." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Berpikir Komputasional Lanjutan: Fungsi, Himpunan & Sistem Bilangan", tp: "Peserta didik mampu memodelkan persoalan logika menggunakan konsep himpunan, fungsi input-output, serta konversi bilangan desimal-biner-oktal." },
              { judul: "Integrasi Aplikasi Perkantoran & Pembuatan Konten Digital (Blog/Vlog)", tp: "Peserta didik mampu mengintegrasikan data tabel/grafik ke dalam laporan dokumen dan memublikasikan konten edukatif secara kreatif." }
            ],
            Genap: [
              { judul: "Jaringan Komputer, Internet, dan Proteksi Keamanan Siber (Phishing/Malware)", tp: "Peserta didik mampu menganalisis cara kerja routing paket data di internet dan menerapkan langkah pencegahan ancaman siber." },
              { judul: "Pemrograman Visual Lanjutan (Scratch dengan Variabel & Percabangan) & Dampak Media Sosial", tp: "Peserta didik mampu mengembangkan aplikasi interaktif berbasis percabangan/perulangan serta mengevaluasi dampak media sosial dan berita bohong." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Berpikir Komputasional: Struktur Data Graf, Pohon (Tree) & Ekspresi Logika", tp: "Peserta didik mampu memodelkan rute perjalanan atau jaringan menggunakan struktur data graf dan pohon secara efisien." },
              { judul: "Integrasi Konten Perkantoran Tingkat Lanjut & Laporan Proyek", tp: "Peserta didik mampu menyusun laporan proyek berbasis data lintas aplikasi perkantoran secara profesional." }
            ],
            Genap: [
              { judul: "Algoritma Pemrograman Modular & Pengenalan Kecerdasan Artifisial (AI)", tp: "Peserta didik mampu merancang program modular sederhana dan memahami prinsip kerja, manfaat, serta etika pemanfaatan Kecerdasan Artifisial (AI)." },
              { judul: "Keamanan Informasi, Jejak Digital & Praktik Lintas Bidang (Projek Karya)", tp: "Peserta didik mampu mengelola rekam jejak digital yang positif dan berkolaborasi menciptakan karya solutif berbasis informatika." }
            ]
          }
        }
      },
      "Berpikir Komputasional (BK)": {
        cpElemen: "Peserta didik mampu menerapkan strategi algoritmik standar untuk menghasilkan beberapa solusi persoalan dengan data diskrit bervolume kecil pada kehidupan sehari-hari maupun implementasinya dalam program komputer.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Dekomposisi, Pengenalan Pola, Abstraksi & Algoritma Harian", tp: "Peserta didik mampu memecah masalah kompleks menjadi submasalah sederhana dan menyusun langkah solusinya." }
            ],
            Genap: [
              { judul: "Optimasi Penjadwalan & Representasi Data Diskrit", tp: "Peserta didik mampu menyelesaikan persoalan optimasi waktu dan representasi struktur data list sederhana." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Himpunan, Fungsi Input-Output & Konversi Sistem Bilangan", tp: "Peserta didik mampu mengonversi bilangan desimal ke biner/oktal serta memodelkan fungsi sederhana." }
            ],
            Genap: [
              { judul: "Struktur Data Stack (Tumpukan) & Queue (Antrean)", tp: "Peserta didik mampu mensimulasikan cara kerja tumpukan dan antrean dalam pemrosesan data." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Struktur Data Graf, Pohon (Tree) & Ekspresi Logika Boolean", tp: "Peserta didik mampu merepresentasikan jaringan dan hierarki data menggunakan graf dan pohon." }
            ],
            Genap: [
              { judul: "Algoritma Pencarian (Searching) & Pengurutan (Sorting)", tp: "Peserta didik mampu membandingkan langkah kerja pencarian biner/sekuensial dan pengurutan data." }
            ]
          }
        }
      },
      "Teknologi Informasi dan Komunikasi (TIK)": {
        cpElemen: "Peserta didik mampu memanfaatkan aplikasi surel dalam berkomunikasi, aplikasi peramban dalam pencarian informasi di internet, CMS dalam pengelolaan konten digital, dan memanfaatkan perkakas TIK untuk mendukung pembuatan laporan, presentasi serta analisis dan interpretasi data.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Antarmuka Pengguna, Manajemen Folder & Peramban Web", tp: "Peserta didik mampu mengelola direktori berkas dan melakukan pencarian informasi yang kredibel." }
            ],
            Genap: [
              { judul: "Pengolah Kata, Lembar Kerja Dasar & Presentasi Efektif", tp: "Peserta didik mampu membuat dokumen terstruktur, tabel perhitungan sederhana, dan salindia presentasi." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Integrasi Konten Antar-Aplikasi Perkantoran (OLE / Cloud)", tp: "Peserta didik mampu menautkan grafik dan tabel lembar kerja ke dalam dokumen laporan dan presentasi." }
            ],
            Genap: [
              { judul: "Pembuatan Blog / Vlog Edukatif & Kolaborasi Daring", tp: "Peserta didik mampu mengelola konten digital melalui platform CMS secara kreatif dan beretika." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Otomasi Dokumen & Laporan Analisis Proyek Terpadu", tp: "Peserta didik mampu menggunakan fitur mail merge, daftar isi otomatis, dan integrasi objek kompleks." }
            ],
            Genap: [
              { judul: "Publikasi Portofolio Digital & Etika Hak Cipta Konten", tp: "Peserta didik mampu memublikasikan karya digital portofolio akhir dengan mencantumkan lisensi secara tepat." }
            ]
          }
        }
      },
      "Sistem Komputer (SK)": {
        cpElemen: "Peserta didik mampu mendeskripsikan komponen, fungsi, dan cara kerja komputer yang membentuk sebuah sistem komputasi, serta menjelaskan proses dan penggunaan kodifikasi untuk penyimpanan data dalam memori komputer.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Perangkat Keras (Input, Proses, Output, Storage) & Perangkat Lunak", tp: "Peserta didik mampu mengklasifikasikan komponen fisik dan jenis perangkat lunak sistem maupun aplikasi." }
            ],
            Genap: [
              { judul: "Interaksi Antarperangkat & Sistem Bilangan Biner pada Memori", tp: "Peserta didik mampu menjelaskan bagaimana teks dan angka dikodifikasikan dalam bentuk bit dan byte." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Arsitektur Komputer (Von Neumann) & Siklus Fetch-Decode-Execute", tp: "Peserta didik mampu menjelaskan cara kerja CPU memproses instruksi program secara berurutan." }
            ],
            Genap: [
              { judul: "Gerbang Logika Dasar & Pengalamatan Memori", tp: "Peserta didik mampu memahami operasi logika AND, OR, NOT sebagai dasar sirkuit digital komputer." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Sistem Operasi, Manajemen Proses & Perangkat Cerdas (IoT)", tp: "Peserta didik mampu menganalisis peran sistem operasi dan prinsip kerja sensor pada perangkat cerdas." }
            ],
            Genap: [
              { judul: "Pemeliharaan Sistem & Troubleshooting Perangkat Komputasi", tp: "Peserta didik mampu mendiagnosis dan mengatasi kendala umum pada perangkat keras dan lunak." }
            ]
          }
        }
      },
      "Jaringan Komputer dan Internet (JKI)": {
        cpElemen: "Peserta didik mampu memahami konektivitas jaringan lokal, komunikasi data via ponsel, konektivitas internet melalui jaringan kabel dan nirkabel (bluetooth, wifi, internet), serta memahami enkripsi untuk memproteksi data pada saat melakukan penyambungan perangkat ke jaringan lokal maupun internet yang tersedia.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Pengantar Jaringan Komputer (LAN, MAN, WAN) & Tethering", tp: "Peserta didik mampu menghubungkan perangkat ke jaringan lokal dan internet secara aman." }
            ],
            Genap: [
              { judul: "Proteksi Data & Enkripsi Sederhana (Caesar Cipher)", tp: "Peserta didik mampu memahami pentingnya kerahasiaan data dan mensimulasikan enkripsi teks sederhana." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Konfigurasi Jaringan Lokal, Alamat IP & DNS", tp: "Peserta didik mampu menjelaskan cara komputer saling berkomunikasi menggunakan alamat IP dan nama domain." }
            ],
            Genap: [
              { judul: "Komunikasi Data pada Ponsel & Keamanan Transaksi Daring", tp: "Peserta didik mampu mengidentifikasi mekanisme jaringan seluler dan protokol aman HTTPS." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Routing Paket Data, Topologi Jaringan & Infrastruktur Internet", tp: "Peserta didik mampu mensimulasikan perjalanan paket data melalui router di jaringan internet." }
            ],
            Genap: [
              { judul: "Keamanan Siber Lanjutan (Firewall, VPN, Autentikasi Multifaktor)", tp: "Peserta didik mampu menerapkan perlindungan berlapis untuk mengamankan identitas digital." }
            ]
          }
        }
      },
      "Analisis Data (AD)": {
        cpElemen: "Peserta didik mampu mengakses, mengolah, mengelola, dan menganalisis data secara efisien, terstruktur, dan sistematis untuk menginterpretasi dan memprediksi sekumpulan data dari situasi konkret sehari-hari yang berasal dari suatu sumber data dengan menggunakan perkakas TIK atau manual.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Pengenalan Data, Satuan Ukuran Data & Format Sel Spreadsheet", tp: "Peserta didik mampu menginput dan memformat berbagai tipe data (teks, angka, tanggal) pada lembar kerja." }
            ],
            Genap: [
              { judul: "Pengolahan Data Dasar: Fungsi Statistik, Sort & Filter", tp: "Peserta didik mampu meringkas data menggunakan SUM, AVERAGE, COUNT, MIN, MAX serta menyaring data." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Pencarian Data (VLOOKUP/HLOOKUP) & Visualisasi Grafik", tp: "Peserta didik mampu mereferensikan data antartabel dan memilih grafik yang tepat." }
            ],
            Genap: [
              { judul: "Peringkasan Data dengan Pivot Table & Validasi Data", tp: "Peserta didik mampu mengelompokkan dataset bervolume sedang untuk menemukan pola tren." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Analisis Data Berbasis Kriteria Majemuk (SUMIFS, COUNTIFS, IF Bertingkat)", tp: "Peserta didik mampu mengolah data survei kompleks untuk menjawab pertanyaan investigasi." }
            ],
            Genap: [
              { judul: "Interpretasi Data Publik & Prediksi Tren Sederhana", tp: "Peserta didik mampu menarik kesimpulan berbasis bukti data untuk pengambilan keputusan." }
            ]
          }
        }
      },
      "Algoritma dan Pemrograman (AP)": {
        cpElemen: "Peserta didik mampu memahami objek-objek dan instruksi dalam sebuah lingkungan pemrograman blok (visual) untuk mengembangkan program visual sederhana berdasarkan contoh-contoh yang diberikan, mengembangkan karya digital kreatif (game, animasi, atau presentasi), dan memahami penerapannya dalam bahasa pemrograman tekstual.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Eksplorasi Pemrograman Visual Blok (Scratch / Blockly)", tp: "Peserta didik mampu menyusun instruksi gerak, tampilan, dan suara pada objek sprite." }
            ],
            Genap: [
              { judul: "Variabel, Operator & Struktur Kontrol Percabangan (If-Else)", tp: "Peserta didik mampu membuat cerita interaktif atau kuis sederhana menggunakan logika percabangan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Struktur Perulangan (Looping) & Deteksi Kejadian (Events)", tp: "Peserta didik mampu merancang game edukasi sederhana dengan interaksi keyboard/mouse." }
            ],
            Genap: [
              { judul: "Modularisasi Program (Custom Blocks / Fungsi) & Debugging", tp: "Peserta didik mampu memecah kode program menjadi subprogram dan memperbaiki kesalahan logika." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Transisi Pemrograman Visual ke Bahasa Tekstual (Python / Blockly-to-Code)", tp: "Peserta didik mampu menerjemahkan logika blok visual ke dalam sintaks dasar Python." }
            ],
            Genap: [
              { judul: "Pemrograman Tekstual Sederhana: Input-Output, Percabangan & Perulangan", tp: "Peserta didik mampu menulis program kalkulator atau pemecah masalah sederhana berbasis teks." }
            ]
          }
        }
      },
      "Dampak Sosial Informatika (DSI)": {
        cpElemen: "Peserta didik mampu memahami ketersediaan data dan informasi lewat aplikasi media sosial, memahami keterbukaan informasi, memilih informasi yang bersifat publik atau privat, menerapkan etika, dan menjaga keamanan dirinya dalam masyarakat digital.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Perkembangan Teknologi Informasi & Kolaborasi di Dunia Digital", tp: "Peserta didik mampu menjelaskan dampak positif dan negatif TIK dalam kehidupan sehari-hari." }
            ],
            Genap: [
              { judul: "Informasi Publik vs Privat & Perlindungan Data Pribadi", tp: "Peserta didik mampu memilah informasi yang aman dibagikan di ruang digital." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Media Sosial, Cek Fakta (Anti-Hoaks) & Etika Berkomunikasi (Netiquette)", tp: "Peserta didik mampu memverifikasi kebenaran berita digital dan berkomunikasi secara santun." }
            ],
            Genap: [
              { judul: "Perundungan Siber (Cyberbullying) & Hak Kekayaan Intelektual (HAKI)", tp: "Peserta didik mampu mencegah tindakan perundungan digital dan menghargai lisensi karya cipta." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Keamanan Identitas Digital, Rekam Jejak Digital & Hukum Siber (UU ITE)", tp: "Peserta didik mampu mengelola jejak digital positif dan memahami rambu hukum di ruang siber." }
            ],
            Genap: [
              { judul: "Kecerdasan Artifisial (AI): Peluang, Bias Algoritma & Etika Penggunaan", tp: "Peserta didik mampu memanfaatkan perangkat AI secara bertanggung jawab dan kritis." }
            ]
          }
        }
      },
      "Praktik Lintas Bidang (PLB)": {
        cpElemen: "Peserta didik mampu bergotong royong untuk mengidentifikasi persoalan, merancang, mengimplementasi, menguji, dan menyempurnakan artefak komputasional sebagai solusi persoalan masyarakat serta mengomunikasikan produk dan proses pengembangannya dalam bentuk karya kreatif yang menyenangkan.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Kerja Sama Tim & Manajemen Proyek Digital Sederhana", tp: "Peserta didik mampu membagi peran tim dan menyusun jadwal pengerjaan karya komputasional." }
            ],
            Genap: [
              { judul: "Pengembangan Artefak Komputasional: Media Kampanye Sekolah", tp: "Peserta didik mampu menciptakan produk digital interaktif untuk menyelesaikan masalah di sekolah." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Perancangan Solusi Berbasis Data & Pemrograman Visual", tp: "Peserta didik mampu merancang prototipe aplikasi atau simulasi edukatif lintas mata pelajaran." }
            ],
            Genap: [
              { judul: "Pengujian Artefak, Dokumentasi & Presentasi Karya", tp: "Peserta didik mampu menguji fungsionalitas karya, memperbaiki kelemahan, dan mempresentasikannya." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Proyek Inovasi Teknologi Tepat Guna untuk Lingkungan Sekitar", tp: "Peserta didik mampu mengidentifikasi masalah komunitas dan merancang solusi komputasionalnya." }
            ],
            Genap: [
              { judul: "Pameran Karya Informatika (Showcase) & Refleksi Proyek", tp: "Peserta didik mampu memamerkan artefak komputasional lengkap dengan laporan pengembangan dan refleksi tim." }
            ]
          }
        }
      }
    }
  },

  "PJOK": {
    cpUmum: "Pada akhir Fase D, peserta didik dapat menunjukkan kemampuan dalam mempraktikkan hasil analisis keterampilan gerak spesifik berupa permainan dan olahraga, aktivitas senam, aktivitas gerak berirama, dan aktivitas permainan dan olahraga air (kondisional), serta memahami konsep kebugaran jasmani, pola makan sehat, dan pencegahan perilaku berisiko.",
    elemen: {
      "Keterampilan Gerak, Pengetahuan Gerak, Pemanfaatan Gerak & Pengembangan Karakter": {
        cpElemen: "Peserta didik mampu menganalisis dan mempraktikkan variasi dan kombinasi keterampilan gerak spesifik dalam berbagai olahraga, merancang program latihan kebugaran jasmani pribadi, serta menerapkan perilaku hidup bersih dan sehat.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Permainan Invasi (Sepak Bola / Bola Basket / Bola Tangan): Gerak Spesifik & Kerja Sama Tim", tp: "Peserta didik mampu menganalisis dan mempraktikkan gerak spesifik mengumpan, menggiring, dan menembak dengan menjunjung sportivitas dan kolaborasi." },
              { judul: "Permainan Net (Bola Voli / Bulu Tangkis): Passing & Servis", tp: "Peserta didik mampu mempraktikkan teknik dasar passing dan servis serta memahami strategi penempatan bola secara aman." }
            ],
            Genap: [
              { judul: "Atletik (Lari Jarak Pendek, Lompat Jauh, Tolak Peluru) & Bela Diri Pencak Silat", tp: "Peserta didik mampu mempraktikkan koordinasi gerak atletik dan jurus dasar pencak silat sebagai warisan budaya bangsa." },
              { judul: "Kebugaran Jasmani Terkait Kesehatan & Pola Makan Bergizi Seimbang", tp: "Peserta didik mampu mengukur tingkat kebugaran jasmani pribadi dan merancang menu gizi seimbang bagi remaja." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Variasi & Kombinasi Gerak Permainan Invasi dan Permainan Lapangan (Kasti/Rounders)", tp: "Peserta didik mampu mengombinasikan keterampilan gerak dalam situasi permainan termodifikasi dengan strategi tim yang efektif." },
              { judul: "Senam Lantai (Keseimbangan, Guling Depan/Belakang) & Aktivitas Gerak Berirama", tp: "Peserta didik mampu merangkai gerak senam lantai dan senam irama secara luwes, estetis, dan mengutamakan keselamatan." }
            ],
            Genap: [
              { judul: "Latihan Peningkatan Daya Tahan Jantung-Paru, Kekuatan & Kelenturan", tp: "Peserta didik mampu menyusun jadwal latihan kebugaran mandiri dan memantau denyut nadi latihan secara sadar." },
              { judul: "Keselamatan Jalan Raya & Pencegahan Bahaya Rokok, Miras, dan Narkoba", tp: "Peserta didik mampu menganalisis risiko penyalahgunaan zat adiktif serta membangun komitmen gaya hidup sehat." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Analisis Taktik dan Strategi Permainan Bola Besar & Bola Kecil", tp: "Peserta didik mampu mengevaluasi efektivitas taktik menyerang dan bertahan dalam permainan beregu dengan komunikasi tim yang baik." },
              { judul: "Rangkaian Kreatif Aktivitas Gerak Berirama & Kebugaran Jasmani Mandiri", tp: "Peserta didik mampu menciptakan koreografi gerak berirama berkelompok dan mengevaluasi profil kebugaran jasmani." }
            ],
            Genap: [
              { judul: "Pertolongan Pertama Pada Kecelakaan (P3K) & Manajemen Stres Remaja", tp: "Peserta didik mampu mempraktikkan langkah dasar P3K pada cedera olahraga ringan serta menerapkan teknik regulasi emosi dan kesehatan mental." }
            ]
          }
        }
      },
      "Terampil Bergerak & Belajar Melalui Gerak": {
        cpElemen: "Peserta didik menganalisis dan menghaluskan keterampilan gerak serta mentransfernya ke dalam berbagai situasi gerak; merancang dan menguji peraturan alternatif dan modifikasi permainan untuk mendukung fair play dan inklusi; serta berpartisipasi dalam berbagai peran di dalam kelompok.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Modifikasi Permainan Bola Besar & Bola Kecil untuk Inklusi", tp: "Peserta didik mampu mempraktikkan keterampilan gerak spesifik dan beradaptasi dengan aturan permainan termodifikasi." }
            ],
            Genap: [
              { judul: "Aktivitas Senam Lantai Dasar & Gerak Berirama", tp: "Peserta didik mampu mempraktikkan rangkaian gerak keseimbangan dan langkah berirama dengan percaya diri." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Strategi Penyerangan dan Pertahanan dalam Permainan Beregu", tp: "Peserta didik mampu menerapkan komunikasi tim dan pembagian peran dalam situasi permainan." }
            ],
            Genap: [
              { judul: "Aktivitas Bela Diri Pencak Silat & Olahraga Air (Kondisional)", tp: "Peserta didik mampu mempraktikkan variasi tangkisan/elakan serta teknik dasar keselamatan di air." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Perancangan Turnamen Kelas & Kepemimpinan Wasit/Manajer Tim", tp: "Peserta didik mampu mengelola pertandingan olahraga sederhana dengan menjunjung tinggi fair play." }
            ],
            Genap: [
              { judul: "Kreasi Senam Irama & Tantangan Kebugaran Kolaboratif", tp: "Peserta didik mampu merancang dan menampilkan rangkaian gerak berirama secara harmonis." }
            ]
          }
        }
      },
      "Bergaya Hidup Aktif & Memilih Hidup yang Menyehatkan": {
        cpElemen: "Peserta didik berpartisipasi dalam aktivitas jasmani untuk menggambarkan pengaruh peningkatan aktivitas jasmani secara teratur terhadap kesehatan; merancang program kebugaran jasmani pribadi; serta menganalisis risiko kesehatan akibat gaya hidup sedentari dan perilaku berisiko.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Pengukuran Komponen Kebugaran Jasmani & Aktivitas Fisik Harian", tp: "Peserta didik mampu mencatat aktivitas fisik harian dan memahami manfaatnya bagi kesehatan jantung dan paru." }
            ],
            Genap: [
              { judul: "Pola Makan Sehat, Gizi Seimbang & Kebersihan Diri Remaja", tp: "Peserta didik mampu mengevaluasi asupan gizi harian dan menerapkan kebiasaan hidup bersih." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Penyusunan Program Latihan Kebugaran Pribadi (Prinsip FITT)", tp: "Peserta didik mampu merancang program latihan berdasarkan frekuensi, intensitas, waktu, dan tipe latihan." }
            ],
            Genap: [
              { judul: "Pencegahan Pergaulan Bebas & Bahaya Zat Adiktif (NAPZA)", tp: "Peserta didik mampu menganalisis dampak buruk NAPZA dan membangun ketahanan diri." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Evaluasi Profil Kebugaran & Pencegahan Gaya Hidup Sedentari", tp: "Peserta didik mampu mengevaluasi perkembangan kebugaran jasmani dan mengurangi waktu layar berlebih." }
            ],
            Genap: [
              { judul: "Tindakan P3K Darurat & Kesehatan Reproduksi serta Mental Remaja", tp: "Peserta didik mampu mempraktikkan penanganan pertama cedera dan menjaga kesehatan mental." }
            ]
          }
        }
      }
    }
  },

  "Pendidikan Agama dan Budi Pekerti (PAI)": {
    cpUmum: "Pada akhir Fase D, peserta didik memahami definisi Al-Qur'an dan Hadis Nabi dan posisinya sebagai sumber ajaran agama Islam, memahami rukun iman secara mendalam dan hubungannya dengan akhlak mulia, memahami pentingnya pelestarian alam dan lingkungan, memahami ketentuan ibadah wajib dan sunnah (salat, zakat, puasa, haji, penyembelihan hewan), serta meneladani sejarah peradaban Islam pada masa Bani Umayyah, Abbasiyah, dan masuknya Islam ke Nusantara.",
    elemen: {
      "Al-Qur'an dan Hadis & Akidah": {
        cpElemen: "Peserta didik mampu membaca, menghafal, memahami makna, dan mengamalkan kandungan ayat-ayat Al-Qur'an dan Hadis pilihan (tentang ilmu pengetahuan, pelestarian alam, toleransi, dan etos kerja) serta menghayati keimanan kepada Allah Swt., malaikat, kitab-kitab, rasul, hari akhir, dan qada-qadar.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Al-Qur'an dan Sunnah sebagai Pedoman Hidup (Q.S. an-Nisa/4: 59 & an-Nahl/16: 64)", tp: "Peserta didik mampu membaca ayat dengan tartil, menganalisis kandungan makna ketaatan kepada Allah, Rasul, dan pemimpin, serta mengamalkannya dalam kehidupan sehari-hari." },
              { judul: "Meneladani Nama dan Sifat Allah (Asmaul Husna: al-'Alim, al-Khabir, as-Sami', al-Basir)", tp: "Peserta didik mampu menghubungkan keyakinan terhadap Asmaul Husna dengan sikap jujur, teliti, dan bertanggung jawab dalam belajar." }
            ],
            Genap: [
              { judul: "Alam Semesta sebagai Tanda Kekuasaan Allah (Q.S. al-Anbiya/21: 30 & al-A'raf/7: 54)", tp: "Peserta didik mampu memahami pesan penciptaan alam semesta dan merancang aksi nyata menjaga kelestarian lingkungan sekolah." },
              { judul: "Mawas Diri dan Introspeksi dalam Menjalani Kehidupan (Iman kepada Malaikat)", tp: "Peserta didik mampu menganalisis fungsi iman kepada malaikat dalam membentuk perilaku disiplin, amanah, dan menjauhi perbuatan tercela." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Melestarikan Alam, Menjaga Kehidupan (Q.S. ar-Rum/30: 41-42 & Ibrahim/14: 32)", tp: "Peserta didik mampu menganalisis penyebab kerusakan lingkungan berdasarkan ayat Al-Qur'an dan menginisiasi proyek ramah lingkungan." },
              { judul: "Meyakini Kitab-Kitab Allah & Menjadi Generasi Pecinta Al-Qur'an", tp: "Peserta didik mampu menjelaskan sejarah diturunkannya kitab-kitab suci dan menerapkan nilai toleransi antarumat beragama." }
            ],
            Genap: [
              { judul: "Meneladani Nabi dan Rasul (Sifat Wajib, Mustahil, Jaiz & Ulul Azmi)", tp: "Peserta didik mampu menganalisis keteladanan kesabaran dan integritas Rasul Ulul Azmi untuk menghadapi tantangan remaja masa kini." },
              { judul: "Menjadi Pribadi Berintegritas (Amanah, Jujur & Toleransi Q.S. al-Hujurat/49: 13)", tp: "Peserta didik mampu mempraktikkan sikap saling menghargai perbedaan suku dan budaya sebagai wujud pengamalan nilai Al-Qur'an." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Semangat Menuntut Ilmu & Mengembangkan Teknologi (Q.S. al-Mujadilah/58: 11 & az-Zumar/39: 9)", tp: "Peserta didik mampu menganalisis keutamaan orang berilmu dan memotivasi diri untuk menguasai sains serta teknologi secara etis." },
              { judul: "Meyakini Hari Akhir dengan Mawas Diri & Bertanggung Jawab", tp: "Peserta didik mampu menghubungkan keimanan kepada Hari Akhir dengan kesadaran beramal saleh dan menjaga perilaku." }
            ],
            Genap: [
              { judul: "Menjemput Berkah dengan Beriman kepada Qada dan Qadar", tp: "Peserta didik mampu membedakan takdir mubram dan muallaq serta membangun sikap optimis, ikhtiar sungguh-sungguh, dan tawakal." },
              { judul: "Meraih Ketenangan Jiwa dengan Sikap Sabar, Syukur & Anti-Perundungan", tp: "Peserta didik mampu menginternalisasi akhlak mahmudah dalam interaksi sosial nyata maupun di media digital." }
            ]
          }
        }
      },
      "Akhlak, Fikih Ibadah & Sejarah Peradaban Islam": {
        cpElemen: "Peserta didik mampu menerapkan akhlak terpuji dalam pergaulan, mempraktikkan ketentuan ibadah (salat berjamaah/jamak-qasar, sujud, zakat, puasa, haji, penyembelihan hewan/kurban), serta mengambil ibrah dari sejarah peradaban Islam.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Menghadirkan Salat dan Zikir dalam Kehidupan (Mencegah Perbuatan Keji & Mungkar)", tp: "Peserta didik mampu menganalisis hikmah salat fardu dan zikir serta mempraktikkannya dengan khusyuk dan berkesadaran." },
              { judul: "Sejarah Peradaban Islam pada Masa Bani Umayyah di Damaskus", tp: "Peserta didik mampu menelaah kemajuan ilmu pengetahuan dan nilai kepemimpinan pada masa Bani Umayyah." }
            ],
            Genap: [
              { judul: "Rukhsah dalam Ibadah: Kemudahan Salat Jamak, Qasar, Puasa & Zakat", tp: "Peserta didik mampu mempraktikkan tata cara salat jamak-qasar dan memahami hikmah keringanan syariat Islam." },
              { judul: "Kemajuan Peradaban Islam di Andalusia (Spanyol) sebagai Inspirasi", tp: "Peserta didik mampu memetik pelajaran dari kejayaan literasi dan toleransi peradaban Islam di Andalusia." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Ibadah dengan Disiplin: Salat Gerhana, Istisqa, Jenazah & Sujud Sahwi/Tilawah/Syukur", tp: "Peserta didik mampu mempraktikkan tata cara berbagai sujud dan salat sunnah muakkad sesuai ketentuan fikih." },
              { judul: "Masa Keemasan Islam pada Era Bani Abbasiyah (Baitul Hikmah)", tp: "Peserta didik mampu menganalisis kontribusi ilmuwan muslim era Abbasiyah bagi peradaban dunia modern." }
            ],
            Genap: [
              { judul: "Ketentuan Makanan-Minuman Halal dan Haram (Gaya Hidup Sehat & Berkah)", tp: "Peserta didik mampu mengidentifikasi kriteria makanan halal dan thayyib serta menerapkannya dalam pilihan konsumsi harian." },
              { judul: "Meneladani Semangat Literasi Ilmuwan Muslim & Moderasi Beragama", tp: "Peserta didik mampu merancang proyek mini biografi tokoh ilmuwan muslim dan nilai moderasi beragama." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Ketentuan Penyembelihan Hewan, Kurban, dan Akikah", tp: "Peserta didik mampu menjelaskan syarat penyembelihan hewan secara ihsan (ramah kesejahteraan hewan) serta hikmah sosial ibadah kurban." },
              { judul: "Sejarah Masuknya Islam ke Nusantara & Peran Wali Songo", tp: "Peserta didik mampu menganalisis strategi dakwah kultural yang damai dan akulturatif di Nusantara." }
            ],
            Genap: [
              { judul: "Ketentuan Ibadah Haji dan Umrah serta Nilai Persatuan Umat", tp: "Peserta didik mampu mensimulasikan rukun dan wajib haji/umrah serta memaknai pesan kesetaraan manusia." },
              { judul: "Peradaban Islam di Nusantara (Kerajaan Islam & Warisan Budaya)", tp: "Peserta didik mampu mengevaluasi kontribusi kerajaan Islam Nusantara dalam membentuk karakter bangsa yang religius dan cinta tanah air." }
            ]
          }
        }
      },
      "Al-Qur'an dan Hadis": {
        cpElemen: "Peserta didik memahami definisi Al-Qur'an dan Hadis Nabi dan posisinya sebagai sumber ajaran agama Islam, serta mampu membaca dengan tartil (ilmu tajwid), menghafal, dan mengamalkan kandungan ayat-ayat Al-Qur'an dan Hadis pilihan.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Hukum Bacaan Alif Lam Syamsiyah dan Qamariyah (Q.S. an-Nisa/4: 59)", tp: "Peserta didik mampu membaca ayat dengan tajwid yang benar dan memahami kedudukan Al-Qur'an serta Hadis." }
            ],
            Genap: [
              { judul: "Hukum Bacaan Gunnah dalam Q.S. al-Anbiya/21: 30", tp: "Peserta didik mampu melafalkan bacaan gunnah secara tartil dan mengaitkannya dengan kebesaran ciptaan Allah." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Hukum Bacaan Lam Jalalah dan Ra dalam Q.S. ar-Rum/30: 41-42", tp: "Peserta didik mampu menerapkan hukum bacaan tafkhim dan tarqiq serta memahami pesan pelestarian lingkungan." }
            ],
            Genap: [
              { judul: "Hukum Bacaan Waqaf dalam Q.S. al-Hujurat/49: 13 tentang Toleransi", tp: "Peserta didik mampu mempraktikkan tanda waqaf dengan tepat dan menghafal ayat tentang keberagaman." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Hukum Bacaan Mad dalam Q.S. al-Mujadilah/58: 11 tentang Etos Ilmu", tp: "Peserta didik mampu mengidentifikasi hukum bacaan mad dan mengamalkan semangat menuntut ilmu." }
            ],
            Genap: [
              { judul: "Hadis tentang Kebersihan, Etos Kerja, dan Kasih Sayang Sesama", tp: "Peserta didik mampu menghafal dan menganalisis kandungan hadis pilihan dalam kehidupan remaja." }
            ]
          }
        }
      },
      "Akidah & Akhlak": {
        cpElemen: "Peserta didik mendalami enam rukun iman (iman kepada Allah, malaikat, kitab-kitab, rasul, hari akhir, dan qada-qadar) serta menginternalisasi akhlak mahmudah (jujur, amanah, toleransi, berbakti kepada orang tua/guru) dan menjauhi akhlak mazmumah.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Iman kepada Allah melalui Asmaul Husna & Perilaku Jujur", tp: "Peserta didik mampu menghubungkan sifat Allah Maha Mengetahui dengan integritas dalam ujian dan pergaulan." }
            ],
            Genap: [
              { judul: "Menjauhi Gibah dan Melaksanakan Tabayun (Klarifikasi Informasi)", tp: "Peserta didik mampu menerapkan prinsip tabayun dalam menyaring berita di media sosial." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Iman kepada Kitab-Kitab Allah & Akhlak Jujur serta Amanah", tp: "Peserta didik mampu menumbuhkan sikap amanah dalam menjalankan tugas kelompok dan organisasi." }
            ],
            Genap: [
              { judul: "Iman kepada Rasul Allah & Toleransi dalam Perbedaan", tp: "Peserta didik mampu meneladani sifat siddiq, amanah, tabligh, fatanah dalam kehidupan sehari-hari." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Iman kepada Hari Akhir & Berbakti kepada Orang Tua serta Guru", tp: "Peserta didik mampu menunjukkan perilaku hormat dan santun kepada orang tua dan guru secara nyata." }
            ],
            Genap: [
              { judul: "Iman kepada Qada dan Qadar & Etika Pergaulan Islami", tp: "Peserta didik mampu menjaga adab pergaulan antarteman serta membangun sikap optimis." }
            ]
          }
        }
      },
      "Fikih & Sejarah Peradaban Islam": {
        cpElemen: "Peserta didik memahami internalisasi nilai-nilai dalam sujud dan ibadah salat, memahami konsep muamalah, riba, rukhsah, serta mengenal berbagai masa keemasan sejarah Islam dan masuknya Islam di Nusantara.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Ketentuan Salat Berjamaah & Sejarah Bani Umayyah di Damaskus", tp: "Peserta didik mampu mempraktikkan tata cara salat berjamaah dengan tertib dan mengambil hikmah sejarah Islam." }
            ],
            Genap: [
              { judul: "Sujud Sahwi, Sujud Tilawah, Sujud Syukur & Peradaban Andalusia", tp: "Peserta didik mampu mempraktikkan bacaan dan gerakan sujud sesuai ketentuan syariat." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Salat Gerhana, Istisqa, Jenazah & Kejayaan Ilmuwan Bani Abbasiyah", tp: "Peserta didik mampu menjelaskan tata cara salat sunnah khusus dan meneladani ilmuwan muslim." }
            ],
            Genap: [
              { judul: "Zakat Fitrah, Zakat Mal & Makanan-Minuman Halal Thayyib", tp: "Peserta didik mampu menghitung nisab zakat sederhana dan memahami hikmah kepedulian sosial." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Penyembelihan Hewan, Kurban, Akikah & Dakwah Wali Songo", tp: "Peserta didik mampu menganalisis nilai kearifan lokal dalam penyebaran Islam di Nusantara." }
            ],
            Genap: [
              { judul: "Manasik Haji-Umrah & Tradisi Islam Nusantara", tp: "Peserta didik mampu mempraktikkan urutan manasik haji dan menghargai tradisi budaya Islam Indonesia." }
            ]
          }
        }
      }
    }
  },

  "Prakarya": {
    cpUmum: "Pada akhir Fase D, peserta didik mampu mengeksplorasi karakteristik bahan, alat, teknik, dan prosedur pembuatan produk kerajinan, rekayasa teknologi tepat guna, budi daya, atau pengolahan pangan/nonpangan berbasis potensi kearifan lokal; merancang desain produk secara ergonomis dan ramah lingkungan; memproduksi karya/produk secara kreatif dan kolaboratif; serta mengevaluasi dan merefleksikan nilai ekonomis maupun keberlanjutan produk.",
    elemen: {
      "Observasi, Desain/Perencanaan, Produksi & Refleksi Evaluasi": {
        cpElemen: "Peserta didik mampu mengamati potensi sumber daya lokal, merancang sketsa/desain produk beserta analisis kebutuhan bahan dan biaya, menciptakan produk yang bernilai guna dan estetis, serta mengevaluasi kualitas hasil karya.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Kerajinan Bahan Alam Lunak (Tanah Liat, Serat Alam, Pelepah Pisang)", tp: "Peserta didik mampu mengeksplorasi karakteristik bahan alam lunak di lingkungan sekitar, merancang desain produk fungsional, dan membuat karya kerajinan ramah lingkungan." },
              { judul: "Pengolahan Pangan Buah dan Sayur Segar Menjadi Minuman & Makanan Sehat", tp: "Peserta didik mampu merancang dan mempraktikkan pengolahan buah/sayur lokal menjadi produk pangan bergizi dengan penyajian menarik." }
            ],
            Genap: [
              { judul: "Kerajinan Bahan Limbah Lunak (Kertas, Plastik Kemasan, Kain Perca - Upcycling)", tp: "Peserta didik mampu menerapkan prinsip 3R (Reduce, Reuse, Recycle) untuk mengolah limbah lunak menjadi produk kerajinan bernilai estetis dan ekonomis." },
              { judul: "Budi Daya Tanaman Sayuran & Tanaman Obat Keluarga (TOGA) di Lahan Terbatas", tp: "Peserta didik mampu merancang media tanam dan mempraktikkan budi daya sayuran atau TOGA secara berkelanjutan di lingkungan sekolah." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Kerajinan Bahan Limbah Keras Organik & Anorganik (Cangkang Kerang, Batok Kelapa, Botol Kaca)", tp: "Peserta didik mampu menganalisis teknik pengolahan limbah keras dan menciptakan produk kerajinan yang kokoh serta bernilai jual." },
              { judul: "Rekayasa Teknologi Penjernihan Air Sederhana & Alat Penyiram Tanaman Otomatis", tp: "Peserta didik mampu merancang dan menguji purwarupa alat rekayasa sederhana untuk mengatasi permasalahan air atau perawatan tanaman." }
            ],
            Genap: [
              { judul: "Pengolahan Bahan Pangan Serealia, Kacang-kacangan, dan Umbi Lokal", tp: "Peserta didik mampu mengolah bahan pangan lokal (singkong, ubi, jagung, kedelai) menjadi produk pangan inovatif beserta kemasan higienis." },
              { judul: "Budi Daya Satwa Harapan / Ikan Konsumsi Air Tawar Skala Rumahan", tp: "Peserta didik mampu menganalisis kebutuhan pemeliharaan dan merancang simulasi budi daya ikan air tawar (lele/nila) secara bertanggung jawab." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Kerajinan Bahan Keras Alam & Buatan (Kayu, Bambu, Rotan, Logam)", tp: "Peserta didik mampu mengombinasikan berbagai teknik sambung dan finishing untuk menghasilkan produk kerajinan bahan keras berkualitas." },
              { judul: "Rekayasa Kelistrikan Sederhana & Otomasi Dasar (Sensor/Lampu Hemat Energi)", tp: "Peserta didik mampu merancang rangkaian produk rekayasa berbasis kelistrikan sederhana yang aman dan bermanfaat bagi kehidupan sehari-hari." }
            ],
            Genap: [
              { judul: "Kerajinan Berbasis Media Campuran (Mixed Media) & Kewirausahaan Produk", tp: "Peserta didik mampu memadukan dua atau lebih jenis bahan menjadi karya kerajinan inovatif serta menghitung harga pokok produksi (HPP)." },
              { judul: "Pengolahan Hasil Peternakan dan Perikanan Menjadi Pangan Siap Saji / Setengah Jadi", tp: "Peserta didik mampu menerapkan teknik pengawetan dan pengolahan hasil perikanan/peternakan lokal menjadi produk kuliner siap dipasarkan." }
            ]
          }
        }
      },
      "Prakarya Kerajinan": {
        cpElemen: "Peserta didik mampu mengeksplorasi karakteristik bahan alam, buatan, dan limbah; merancang desain produk kerajinan ergonomis; memproduksi karya kerajinan Nusantara yang kreatif; serta merefleksikan nilai estetika dan ekonomisnya.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Eksplorasi & Pembuatan Kerajinan Serat Alam dan Tekstil Sederhana", tp: "Peserta didik mampu membuat produk kerajinan fungsional dari bahan serat alam lokal." }
            ],
            Genap: [
              { judul: "Kreasi Upcycling Limbah Kertas dan Plastik Kemasan", tp: "Peserta didik mampu mengolah limbah anorganik lunak menjadi aksesori atau wadah serbaguna." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Kerajinan Bahan Lunak Buatan (Polymer Clay, Sabun, Lilin Hias)", tp: "Peserta didik mampu menerapkan teknik cetak dan ukir pada bahan lunak buatan secara presisi." }
            ],
            Genap: [
              { judul: "Kerajinan Limbah Keras (Batok Kelapa, Kayu Sisa, Cangkang)", tp: "Peserta didik mampu merancang dan membuat produk kerajinan limbah keras dengan finishing rapi." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Kerajinan Anyaman Bambu/Rotan & Ukiran Kayu Lokal", tp: "Peserta didik mampu menerapkan motif tradisional Nusantara pada produk kerajinan bahan keras." }
            ],
            Genap: [
              { judul: "Kerajinan Media Campuran & Pengemasan Produk Siap Jual", tp: "Peserta didik mampu menciptakan produk kerajinan berbasis media campuran lengkap dengan kemasan dan label merek." }
            ]
          }
        }
      },
      "Prakarya Rekayasa": {
        cpElemen: "Peserta didik mampu mengamati sistem kerja alat teknologi tepat guna, merancang sketsa/rangkaian mekanik maupun elektrik sederhana, membuat purwarupa alat solutif, serta menguji kelayakan fungsinya.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Rekayasa Miniatur Konstruksi Jembatan & Bangunan Tahan Gempa", tp: "Peserta didik mampu merancang dan menguji kekuatan struktur miniatur jembatan dari stik kayu/bambu." }
            ],
            Genap: [
              { judul: "Alat Penggerak Mekanik Sederhana (Katrol & Roda Gigi)", tp: "Peserta didik mampu membuat model alat bantu angkut berbasis prinsip mekanika sederhana." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Purwarupa Alat Penjernih Air & Pemanen Air Hujan", tp: "Peserta didik mampu menyusun media filtrasi bertingkat dan menguji kejernihan air." }
            ],
            Genap: [
              { judul: "Alat Pembuat Kompos (Komposter) Skala Rumah Tangga", tp: "Peserta didik mampu merancang wadah pengolah sampah organik menjadi pupuk cair/padat." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Instalasi Listrik Rumah Tangga Dasar & Papan Uji Rangkaian", tp: "Peserta didik mampu merakit sakelar, stopkontak, dan lampu dengan memperhatikan keselamatan kerja (K3)." }
            ],
            Genap: [
              { judul: "Alat Pendeteksi Banjir / Alarm Otomatis Berbasis Sensor Sederhana", tp: "Peserta didik mampu membuat purwarupa alat peringatan dini berbasis rangkaian elektronik sederhana." }
            ]
          }
        }
      },
      "Prakarya Budi Daya": {
        cpElemen: "Peserta didik mampu mengeksplorasi jenis dan karakteristik komoditas budi daya tanaman maupun satwa; merancang wadah/media budi daya ramah lingkungan; mempraktikkan pemeliharaan hingga panen; serta mengevaluasi hasil budi daya.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Budi Daya Tanaman Sayuran Daun Cepat Panen (Kangkung, Bayam, Pakcoy)", tp: "Peserta didik mampu menyiapkan media tanam polybag dan merawat tanaman sayuran hingga panen." }
            ],
            Genap: [
              { judul: "Budi Daya Tanaman Obat Keluarga (TOGA) & Vertikultur", tp: "Peserta didik mampu memanfaatkan lahan sempit sekolah dengan teknik vertikultur." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Budi Daya Tanaman Hidroponik Sederhana (Sistem Wick / Sumbu)", tp: "Peserta didik mampu merakit instalasi hidroponik dari botol bekas dan memantau nutrisi tanaman." }
            ],
            Genap: [
              { judul: "Budi Daya Ikan Konsumsi Air Tawar (Sistem Ember / Budikdamber)", tp: "Peserta didik mampu mempraktikkan teknik budi daya ikan dalam ember terintegrasi tanaman kangkung." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Budi Daya Tanaman Hias & Perbanyakan Vegetatif (Stek/Cangkok)", tp: "Peserta didik mampu mempraktikkan teknik perbanyakan tanaman hias bernilai ekonomis." }
            ],
            Genap: [
              { judul: "Budi Daya Ikan Hias Air Tawar & Manajemen Kualitas Air", tp: "Peserta didik mampu merancang akuarium/kolam mini serta memelihara ikan hias secara berkelanjutan." }
            ]
          }
        }
      },
      "Prakarya Pengolahan": {
        cpElemen: "Peserta didik mampu mengeksplorasi karakteristik bahan pangan dan nonpangan lokal; merancang resep/formula pengolahan yang higienis dan bergizi; mempraktikkan proses pengolahan dan pengemasan; serta mengevaluasi cita rasa dan nilai jual.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Pengolahan Buah Segar Menjadi Minuman Sehat & Salad Buah", tp: "Peserta didik mampu mengolah buah lokal tanpa pemanis buatan dengan penyajian menarik." }
            ],
            Genap: [
              { judul: "Pengolahan Sayuran Menjadi Camilan Sehat & Produk Nonpangan (Ekoenzim)", tp: "Peserta didik mampu mengolah limbah kulit buah/sayur menjadi cairan ekoenzim serbaguna." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Pengolahan Serealia dan Kacang-Kacangan Menjadi Pangan Fungsional", tp: "Peserta didik mampu memproduksi olahan bergizi berbahan dasar jagung, kacang hijau, atau kedelai." }
            ],
            Genap: [
              { judul: "Pengolahan Umbi-Umbian Lokal (Singkong, Ubi Jalar, Talas) Inovatif", tp: "Peserta didik mampu memodifikasi jajanan tradisional berbahan umbi menjadi produk kekinian." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Pengolahan Hasil Peternakan (Telur, Susu, Daging) Menjadi Pangan Siap Saji", tp: "Peserta didik mampu menerapkan standar kebersihan pangan dalam mengolah produk hewani." }
            ],
            Genap: [
              { judul: "Pengolahan Hasil Perikanan Lokal & Produk Pangan Setengah Jadi", tp: "Peserta didik mampu mengolah ikan lokal menjadi produk awetan sehat beserta analisis kelayakan usaha." }
            ]
          }
        }
      }
    }
  },

  "Seni Budaya": {
    cpUmum: "Pada akhir Fase D, peserta didik mampu mengalami, merasakan, merespons, dan bereksperimen dengan berbagai unsur serta prinsip seni (Seni Rupa, Seni Musik, Seni Tari, atau Seni Teater); menciptakan karya seni yang ekspresif, orisinal, dan berakar pada kearifan budaya Nusantara maupun isu kontekstual; serta merefleksikan makna estetis dan dampak karya seni bagi diri sendiri dan masyarakat.",
    elemen: {
      "Seni Rupa (Mengalami, Menciptakan, Merefleksikan & Berdampak)": {
        cpElemen: "Peserta didik mampu mengamati dan menganalisis unsur serta prinsip seni rupa di lingkungan sekitar, bereksperimen dengan berbagai medium dan teknik, menciptakan karya seni rupa dua atau tiga dimensi yang bermakna, serta mempresentasikan refleksi karyanya.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Seni Rupa: Menggambar Flora, Fauna, dan Alam Benda dengan Unsur & Prinsip Rupa", tp: "Peserta didik mampu menganalisis komposisi, proporsi, pencahayaan, dan tekstur dalam menggambar objek alam sekitar secara ekspresif." },
              { judul: "Seni Rupa: Ragam Hias Nusantara dan Penerapannya pada Media Tekstil/Kayu", tp: "Peserta didik mampu mengeksplorasi filosofi motif ragam hias daerah Indonesia dan menciptakan desain ragam hias modifikasi." }
            ],
            Genap: [
              { judul: "Seni Rupa: Tipografi, Desain Logo & Poster Kampanye Sosial", tp: "Peserta didik mampu merancang karya komunikasi visual (poster/logo) yang estetis untuk menyuarakan isu pelestarian lingkungan atau anti-perundungan." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Seni Rupa: Menggambar Perspektif, Ilustrasi Cerita & Komik Edukatif", tp: "Peserta didik mampu menerapkan hukum perspektif dan teknik ilustrasi untuk menyampaikan narasi atau pesan moral dalam bentuk komik." }
            ],
            Genap: [
              { judul: "Seni Rupa: Seni Lukis Berbagai Aliran & Eksplorasi Medium Ramah Lingkungan", tp: "Peserta didik mampu mengekspresikan gagasan dan emosi melalui karya seni lukis dengan memadukan warna dan teknik kuas secara kreatif." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Seni Rupa: Seni Patung & Instalasi Tiga Dimensi dari Bahan Daur Ulang", tp: "Peserta didik mampu merancang dan mewujudkan karya seni tiga dimensi yang merefleksikan kepedulian terhadap isu lingkungan." }
            ],
            Genap: [
              { judul: "Seni Rupa: Seni Grafis (Cetak Saring/Cetak Tinggi) & Pameran Karya Sekolah", tp: "Peserta didik mampu memproduksi karya seni grafis dan berkolaborasi menyelenggarakan pameran seni kelas yang memuliakan karya setiap siswa." }
            ]
          }
        }
      },
      "Seni Musik, Seni Tari & Seni Teater (Ekspresi Pertunjukan Nusantara)": {
        cpElemen: "Peserta didik mampu menyimak, mengidentifikasi unsur pertunjukan (irama/melodi musik, wiraga-wirama-wirasa tari, atau olah tubuh-suara-sukma teater), berkolaborasi menyusun garapan pertunjukan kreatif, serta mengevaluasi pesan nilai di dalamnya.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Seni Musik: Bernyanyi Solo & Vokal Grup Lagu Daerah Nusantara", tp: "Peserta didik mampu mempraktikkan teknik pernapasan, artikulasi, dan harmonisasi vokal dalam membawakan lagu daerah dengan penuh penghayatan." }
            ],
            Genap: [
              { judul: "Seni Tari & Teater: Gerak Tari Tradisional dan Pantomim Ekspresif", tp: "Peserta didik mampu mengeksplorasi ruang, waktu, dan tenaga dalam gerak tari tradisi maupun ekspresi mimik dalam seni peran." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Seni Musik: Bermain Ansambel Musik Tradisional & Modern Sederhana", tp: "Peserta didik mampu berkolaborasi memainkan alat musik ritmis dan melodis dalam ansambel dengan kekompakan irama." }
            ],
            Genap: [
              { judul: "Seni Tari: Pola Lantai, Iringan & Penciptaan Tari Kreasi Berkelompok", tp: "Peserta didik mampu merangkai gerak tari kreasi berbasis tradisi lokal dengan variasi pola lantai yang harmonis." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Seni Musik: Aransemen Lagu & Pemanfaatan Teknologi Musik Digital", tp: "Peserta didik mampu mengaransemen ulang lagu Nusantara atau menciptakan komposisi musik sederhana secara kreatif." }
            ],
            Genap: [
              { judul: "Seni Teater & Pertunjukan Kolaboratif: Pementasan Drama Kontekstual", tp: "Peserta didik mampu merancang naskah, tata artistik, dan mementaskan pertunjukan teater bertema kehidupan remaja secara gotong royong." }
            ]
          }
        }
      },
      "Seni Musik": {
        cpElemen: "Peserta didik menyimak, melibatkan diri secara aktif dalam pengalaman atas bunyi-musik, menunjukkan kepekaan akan konteks serta mampu secara aktif berpartisipasi dalam sajian musik; mengidentifikasi unsur-unsur musik; serta menciptakan dan menyajikan karya musik.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Teknik Vokal, Pernapasan Diafragma & Bernyanyi Unisono", tp: "Peserta didik mampu menyanyikan lagu wajib nasional dan daerah secara unisono dengan intonasi tepat." }
            ],
            Genap: [
              { judul: "Bermain Alat Musik Ritmis dan Melodis Sederhana (Pianika/Rekorder)", tp: "Peserta didik mampu membaca notasi angka/balok dasar dan memainkan melodi lagu daerah." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Gaya dan Teknik Bernyanyi Lagu Daerah dalam Bentuk Vokal Grup", tp: "Peserta didik mampu menyusun pembagian suara dua/tiga suara dalam sajian vokal grup." }
            ],
            Genap: [
              { judul: "Ansambel Musik Campuran & Apresiasi Musik Tradisional Nusantara", tp: "Peserta didik mampu memadukan alat musik ritmis, harmonis, dan melodis dalam sajian ansambel." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Aransemen Lagu Populer & Nusantara untuk Ansambel", tp: "Peserta didik mampu mengaransemen melodi utama dan iringan akor secara kreatif." }
            ],
            Genap: [
              { judul: "Produksi Musik Digital & Pertunjukan Musik Kelas", tp: "Peserta didik mampu menggunakan perangkat lunak audio sederhana untuk merekam dan menyajikan karya musik." }
            ]
          }
        }
      },
      "Seni Tari": {
        cpElemen: "Peserta didik menggali latar belakang nilai, filosofi, dan makna tari sebagai wujud ekspresi budaya; mengeksplorasi unsur utama tari (gerak, ruang, waktu, tenaga) dan unsur pendukung tari; serta merangkai dan menyajikan tari kreasi.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Unsur Utama Tari (Ruang, Waktu, Tenaga) & Gerak Dasar Tari Tradisi", tp: "Peserta didik mampu mempraktikkan ragam gerak dasar tari daerah dengan penghayatan irama." }
            ],
            Genap: [
              { judul: "Level, Pola Lantai & Iringan Musik Tari Tradisional", tp: "Peserta didik mampu menerapkan variasi level rendah-sedang-tinggi dan pola lantai dalam tari kelompok." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Keunikan Gerak Tari Tradisional Nusantara & Tata Rias-Busana", tp: "Peserta didik mampu menganalisis filosofi gerak dan tata busana tari dari berbagai daerah di Indonesia." }
            ],
            Genap: [
              { judul: "Eksplorasi Gerak Tari Kreasi Berbasis Kearifan Lokal", tp: "Peserta didik mampu menyusun motif gerak tari kreasi yang terinspirasi dari aktivitas masyarakat lokal." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Komposisi Tari Kreasi & Desain Lantai Berkelompok", tp: "Peserta didik mampu merancang koreografi tari kreasi utuh dengan transisi pola lantai yang dinamis." }
            ],
            Genap: [
              { judul: "Manajemen Pertunjukan Tari & Apresiasi Karya Koreografi", tp: "Peserta didik mampu menyelenggarakan pergelaran tari kelas dan memberikan ulasan apresiatif." }
            ]
          }
        }
      },
      "Seni Teater": {
        cpElemen: "Peserta didik memahami penggunaan sederhana seluruh elemen pertunjukan teater secara utuh termasuk di dalamnya teknik keaktoran, penyutradaraan, dan memahami fungsi elemen artistik; serta menciptakan dan mementaskan lakon sederhana.",
        topik: {
          VII: {
            Ganjil: [
              { judul: "Olah Tubuh, Olah Suara, Olah Rasa & Teknik Dasar Pantomim", tp: "Peserta didik mampu mengekspresikan emosi dan cerita tanpa kata melalui gerak tubuh dan mimik wajah." }
            ],
            Genap: [
              { judul: "Menyusun Naskah Pantomim & Fragmen Cerita Rakyat", tp: "Peserta didik mampu merancang skenario adegan sederhana dan memerankannya secara ekspresif." }
            ]
          },
          VIII: {
            Ganjil: [
              { judul: "Teknik Dasar Akting Teater Realis & Improvisasi Peran", tp: "Peserta didik mampu membangun karakter tokoh dan melakukan dialog improvisasi secara wajar." }
            ],
            Genap: [
              { judul: "Tata Artistik Panggung (Tata Lampu, Suara, Kostum & Properti)", tp: "Peserta didik mampu merancang kebutuhan tata artistik sederhana untuk mendukung suasana pertunjukan." }
            ]
          },
          IX: {
            Ganjil: [
              { judul: "Penulisan Naskah Drama Bertema Isu Remaja & Sosial", tp: "Peserta didik mampu menulis naskah lakon satu babak dengan struktur alur, dialog, dan konflik yang kuat." }
            ],
            Genap: [
              { judul: "Penyutradaraan & Pementasan Teater Kolaboratif Akhir Tahun", tp: "Peserta didik mampu berkolaborasi sebagai aktor maupun kru produksi dalam pementasan teater sekolah." }
            ]
          }
        }
      }
    }
  }
};