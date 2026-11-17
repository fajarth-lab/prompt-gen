/**
 * Prompt Engine — Studio RPP SMP Pembelajaran Mendalam
 * Mengintegrasikan prinsip Pembelajaran Mendalam, CP Fase D,
 * serta Instruksi Integrasi Canva Connector & Desain Profesional (Canva Doc / Presentasi).
 */

function buildDeepLearningPrompt(config) {
  const {
    kelas,
    semester,
    mapel,
    alokasi,
    elemen,
    topik,
    namaSekolah,
    namaGuru,
    cp,
    tp,
    dimensiList,
    pedagogi,
    lingkungan,
    kemitraan,
    digital,
    konteksLokal,
    komponenList,
    lampiranList,
    taksonomi,
    jenisRubrik,
    asesmenList,
    formatFile,
    gayaLayout,
    modeOutput,
    bahasaDokumen
  } = config;

  const identitasSekolah = namaSekolah || "[Nama Satuan Pendidikan]";
  const identitasGuru = namaGuru || "[Nama Guru Penyusun]";
  const dimensiText = dimensiList.length > 0
    ? dimensiList.join(", ")
    : "Penalaran Kritis, Kreativitas, Kolaborasi, Komunikasi";

  const konteksText = konteksLokal && konteksLokal !== "Serahkan ke AI"
    ? konteksLokal
    : "[Serahkan ke AI] Rancang dan kaitkan konsep materi secara kreatif dengan fenomena kehidupan nyata, isu lingkungan sekitar, atau kearifan lokal yang paling relevan dengan karakteristik peserta didik SMP di Indonesia.";

  const komponenText = komponenList.length > 0
    ? komponenList.map((item) => `  • ${item}`).join("\n")
    : "  • Skenario kegiatan lengkap dengan prinsip Berkesadaran, Bermakna, dan Menggembirakan.";

  const lampiranText = lampiranList.length > 0
    ? lampiranList.map((item) => `  • ${item}`).join("\n")
    : "  • LKPD Berbasis Aktivitas & Bahan Bacaan.";

  const asesmenText = asesmenList.length > 0
    ? asesmenList.map((item) => `  • ${item}`).join("\n")
    : "  • Asesmen Awal, Asesmen Proses, dan Asesmen Akhir.";

  // Instruksi Spesifik Canva Connector & Desain Profesional
  let instruksiCanvaDesain = `
====================================================================
PANDUAN DESAIN GRAFIS & INTEGRASI CANVA CONNECTOR
====================================================================
1. **PERAN UTAMA DESAIN:** 
   - Bertindaklah sebagai Instructional Designer profesional dan expert graphic designer.
2. **EKSEKUSI CANVA CONNECTOR:**
   - Tolong gunakan integrasi Canva untuk membuatkan dokumen **Canva Doc** (atau **Presentasi** sesuai pilihan format) untuk RPP ini dengan desain tata letak (layout) yang profesional, rapi, dan estetik.
   - **WAJIB:** Jika di-generate menggunakan Canva Doc atau Canva Connector, sertakan dan berikan **tautan langsung (clickable link) untuk membuka dokumen tersebut di Canva** di akhir respons Anda.
3. **PANDUAN TATA LETAK & ESTETIKA VISUAL:**
   - **Gaya Visual:** Gunakan gaya desain pendidikan modern yang bersih dan ramah (clean & educational) dengan palet warna profesional (misal: biru soft, hijau mint, atau kombinasi warna netral dengan aksen warna cerah yang tidak berlebihan).
   - **Elemen Pendukung:** Tambahkan arahan elemen visual berupa ikon, ornamen pembatas, atau ilustrasi pendukung yang relevan dengan topik pembelajaran di setiap bagian/halaman agar dokumen tidak membosankan.
   - **Hierarki Teks:** Buat hierarki teks yang sangat jelas (Judul bab besar, sub-judul, dan poin-poin isi dengan bullet/numbering yang rapi, serta gunakan format blok kotak/callout untuk poin penting).
4. **ANTI-AI LOOK & GAYA BAHASA:**
   - Gunakan bahasa Indonesia baku yang luwes, bernyawa, praktis, dan ditulis dari sudut pandang Guru Pakar Penyusun Pembelajaran (hindari frasa klise robotik AI).
`;

  let instruksiFormatUmum = "";
  if (formatFile === "DOCX") {
    instruksiFormatUmum = `[TARGET OUTPUT: MICROSOFT WORD / .DOCX] - Buat file Word profesional dengan tabel ber-header rapi.`;
  } else if (formatFile === "PDF") {
    instruksiFormatUmum = `[TARGET OUTPUT: PDF] - Buat dokumen ukuran A4 yang bersih dan siap cetak.`;
  } else {
    instruksiFormatUmum = `[TARGET OUTPUT: DOKUMEN INTERAKTIF / CANVA]`;
  }

  const alurEksekusi = modeOutput === "bertahap"
    ? `ALUR EKSEKUSI DUA TAHAP:
- TAHAP 1: Tampilkan kerangka inti RPP terlebih dahulu dengan gaya bahasa natural. Di akhir, tanyakan: "Apakah kerangka ini sudah sesuai? Ketik 'LANJUT' untuk langsung mengeksekusi pembuatan dokumen melalui Canva Connector beserta tautannya."
- TAHAP 2 (SETELAH KETIK 'LANJUT'): Lanjutkan generate seluruh dokumen secara utuh tanpa terpotong.`
    : `ALUR EKSEKUSI LANGSUNG (1 KALI PROSES):
Susun seluruh bagian RPP dari Bagian A hingga Lampiran secara utuh, operasional, estetik, dan **langsung panggil integrasi Canva Connector untuk menghasilkan Canva Doc lengkap dengan tautan unduhan/bukanya** dalam satu eksekusi.`;

  return `Bertindaklah sebagai Guru Pakar Penyusun Pembelajaran, Instructional Designer profesional, dan Expert Graphic Designer jenjang SMP (Fase D).

Tugas Anda adalah menyusun dokumen **Rencana Pelaksanaan Pembelajaran (RPP) / Modul Ajar** yang sangat rapi, profesional, memuliakan peserta didik, memiliki estetika tingkat tinggi, serta terintegrasi langsung dengan ekosistem Canva.

${instruksiCanvaDesain}
${instruksiFormatUmum}

====================================================================
1. IDENTITAS & ACUAN KURIKULUM (FASE D — SMP)
====================================================================
- Satuan Pendidikan : ${identitasSekolah}
- Nama Penyusun      : ${identitasGuru}
- Jenjang / Fase     : SMP / Fase D
- Kelas / Semester   : Kelas ${kelas} / Semester ${semester}
- Mata Pelajaran     : ${mapel}
- Alokasi Waktu      : ${alokasi}
- Elemen / Bab       : ${elemen}
- Topik / Materi     : ${topik}
- Konteks Kelas      : ${konteksText}
- Bahasa Dokumen     : ${bahasaDokumen}

- Capaian Pembelajaran (CP Fase D):
  "${cp}"

- Tujuan Pembelajaran (TP):
  "${tp}"

*Catatan Fokus Kurikuler:* Pastikan seluruh skenario pembelajaran, LKPD, dan instrumen asesmen terkunci secara presisi pada elemen **${elemen}** dan topik **${topik}**.

====================================================================
2. KERANGKA PEDAGOGIS PEMBELAJARAN MENDALAM
====================================================================
- Dimensi Profil Lulusan (8 Dimensi): ${dimensiText}
- Praktik Pedagogis Utama : ${pedagogi}
- Lingkungan Pembelajaran : ${lingkungan}
- Kemitraan Pembelajaran  : ${kemitraan}
- Pemanfaatan Digital     : ${digital}

Prinsip Mutlak yang Wajib Tercermin dalam Aktivitas:
1. **Prinsip 3M:** Integrasikan dan beri label eksplisit **[Berkesadaran]**, **[Bermakna]**, dan **[Menggembirakan]** di dalam skenario pembelajaran.
2. **Pendekatan Holistik 4 Olah:** Padukan *Olah Pikir* (penalaran kritis/analitis), *Olah Hati* (etika & nilai moral), *Olah Rasa* (empati & estetika), dan *Olah Raga* (aktivitas fisik/kinestetik).
3. **Pengalaman Belajar Bertahap:** Rancang kegiatan inti secara berurutan melalui fase **Memahami** (konstruksi pengetahuan esensial, aplikatif, nilai & karakter) → **Mengaplikasi** (pendalaman pengetahuan & pemecahan masalah nyata) → **Merefleksi** (evaluasi diri, metakognisi, & regulasi diri).
4. **Peran Guru:** Posisikan guru sebagai *Aktivator*, *Kolaborator*, dan *Pengembang Budaya Belajar*.

====================================================================
3. KOMPONEN WAJIB DALAM DOKUMEN RPP
====================================================================
Komponen Skenario & Pembelajaran:
${komponenText}

Cakupan Asesmen & Evaluasi:
- Target Kedalaman Kognitif : ${taksonomi}
- Standar Rubrik Penilaian  : ${jenisRubrik}
${asesmenText}

Lampiran Pendukung Wajib:
${lampiranText}

====================================================================
4. SISTEMATIKA & TATA LETAK DOKUMEN (${gayaLayout})
====================================================================
Susun isi dokumen secara sistematis, bersih, elegan, dan estetik dengan struktur berikut:
- **KOP / HEADER DOKUMEN:** Identitas satuan pendidikan yang bersih dan terstruktur rapi.
- **BAGIAN A — INFORMASI UMUM & IDENTIFIKASI:** Tabel Identitas RPP, Pemetaan Kesiapan Belajar Siswa, dan Matriks Dimensi Profil Lulusan.
- **BAGIAN B — DESAIN PEMBELAJARAN:** CP, TP Operasional, Pemahaman Bermakna, Pertanyaan Pemantik HOTS, serta Kerangka Pembelajaran.
- **BAGIAN C — PENGALAMAN BELAJAR (SKENARIO KEGIATAN):** Tabel langkah pembelajaran terperinci (Pendahuluan, Kegiatan Inti [1. Memahami, 2. Mengaplikasi, 3. Merefleksi], dan Penutup) lengkap dengan estimasi waktu, aktivitas guru sebagai aktivator, aktivitas siswa, diferensiasi, serta label prinsip 3M & 4 Olah.
- **BAGIAN D — ASESMEN PEMBELAJARAN:** Instrumen lengkap Asesmen Awal, Asesmen Proses, Asesmen Akhir, dan Rubrik Penilaian (${jenisRubrik}).
- **BAGIAN E — REFLEKSI, PENGAYAAN & REMEDIAL:** Panduan refleksi guru & siswa, serta program tindak lanjut.
- **BAGIAN F — LAMPIRAN LENGKAP:** LKPD Berbasis Aktivitas siap cetak/desain, Bahan Bacaan Guru & Siswa, serta Lembar Pengesahan.

====================================================================
5. INSTRUKSI EKSEKUSI
====================================================================
${alurEksekusi}`;
}
