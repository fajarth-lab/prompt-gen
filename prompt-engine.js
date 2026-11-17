/**
 * Prompt Engine — Studio RPP SMP Pembelajaran Mendalam
 * Mengintegrasikan prinsip Pembelajaran Mendalam (Deep Learning), CP Fase D,
 * Standar Anti-AI Look, serta Eksekusi Otomatis Desain Penuh & Canva Connector.
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

  // Instruksi Spesifik Format & Canva Connector (Auto-Render Dokumen Desain Jadi)
  let instruksiTargetOutput = "";
  if (formatFile === "CANVAS" || formatFile === "CANVA") {
    instruksiTargetOutput = `
====================================================================
PANDUAN DESAIN GRAFIS & EKSEKUSI CANVA CONNECTOR (WAJIB)
====================================================================
1. **PERAN UTAMA DESAIN:** 
   - Bertindaklah sebagai Instructional Designer profesional dan Expert Graphic Designer.
2. **EKSEKUSI CANVA CONNECTOR & AUTO-GENERATION:**
   - Gunakan integrasi Canva Connector untuk **langsung menghasilkan dokumen desain jadi** (pilih format: **Canva Doc** atau **Presentasi Canva**) yang utuh, profesional, dan estetik. 
   - **LARANGAN POLOSAN:** Dokumen **TIDAK BOLEH** polosan, berupa teks mentah, atau sekadar draf untuk disalin manual. AI bersama Canva Connector wajib merender layout visual lengkap dengan pembagian halaman yang proporsional, elemen grafis, kotak informasi (callout box), serta ilustrasi/ikon penuh di setiap bagiannya.
   - **WAJIB TAUTAN CANVA:** Jika dokumen berhasil di-generate oleh Canva Doc atau Canva Connector, sertakan **tautan langsung (clickable link) untuk membukanya di Canva** pada akhir respons Anda.
3. **PANDUAN TATA LETAK & ESTETIKA VISUAL:**
   - **Gaya Visual:** Gunakan gaya desain pendidikan modern yang bersih dan ramah (*clean & educational*) dengan palet warna profesional (misal: biru soft, hijau mint, atau kombinasi warna netral dengan aksen warna cerah yang tidak berlebihan).
   - **Elemen Visual & Full Ilustrasi:** Sematkan elemen visual berupa ikon, ornamen pembatas, dan ilustrasi pendukung yang relevan dengan topik **${topik}** di setiap bagian/halaman agar dokumen menarik dan tidak membosankan.
   - **Hierarki Teks:** Buat hierarki teks yang sangat jelas (Judul bab besar, sub-judul, tabel minimalis rapi, dan poin-poin isi dengan bullet/numbering yang terstruktur).
`;
  } else if (formatFile === "DOCX") {
    instruksiTargetOutput = `
====================================================================
PANDUAN GENERATE FILE MICROSOFT WORD (.DOCX) PROFESIONAL
====================================================================
- Langsung buatkan file dokumen Microsoft Word (.docx) siap unduh dengan tata letak estetis, palet warna header tabel yang lembut, jarak spasi proporsional, serta elemen grafis/pembatas yang rapi (tidak polosan).
`;
  } else if (formatFile === "PDF") {
    instruksiTargetOutput = `
====================================================================
PANDUAN GENERATE FILE PDF SIAP CETAK BERSIH
====================================================================
- Langsung buatkan file dokumen PDF ukuran A4 siap cetak dengan desain visual modern, hierarki tipografi yang rapi, tabel berbingkai bersih, dan tata letak halaman seimbang tanpa teks yang terpotong.
`;
  } else {
    instruksiTargetOutput = `
====================================================================
PANDUAN FORMAT DOKUMEN STANDAR PROFESIONAL
====================================================================
- Susun dokumen dengan hierarki judul yang jelas, tabel terstruktur rapi, kotak highlight untuk poin penting, dan tata letak yang langsung siap pakai.
`;
  }

  // Aturan Universal Lintas Platform AI (Claude, ChatGPT, Gemini) & Anti-AI Look
  const instruksiUniversalAntiAI = `
====================================================================
ATURAN UNIVERSAL LINTAS AI & GAYA BAHASA (ANTI-AI LOOK)
====================================================================
1. **GAYA BAHASA GURU PAKAR (HUMANIS & ALAMI):**
   - Tulis seluruh dokumen dengan bahasa Indonesia baku yang luwes, praktis, bernyawa, dan operasional dari sudut pandang **Guru Pakar Penyusun Pembelajaran**.
   - **HINDARI KLISE ROBOTIK AI:** JANGAN menggunakan kalimat pengantar atau penutup khas AI yang kaku dan bertele-tele (seperti *"Dalam era modern ini..."*, *"Penting untuk dicatat bahwa..."*, *"Modul ajar ini dirancang untuk..."*, atau *"Semoga RPP ini bermanfaat..."*). Langsung sajikan isi dokumen inti secara profesional.
2. **KONSISTENSI LINTAS PLATFORM (CLAUDE, CHATGPT, GEMINI):**
   - Apapun platform AI yang menjalankan perintah ini, eksekusi langsung pembuatan dokumen/file/desain sesuai target output tanpa menyingkat bagian penting. Pastikan seluruh bagian dari Bagian A hingga Lampiran tersusun lengkap, utuh, dan berestetika tinggi.
`;

  const alurEksekusi = modeOutput === "bertahap"
    ? `ALUR EKSEKUSI DUA TAHAP:
- TAHAP 1: Tampilkan kerangka inti RPP (Bagian A sampai D) terlebih dahulu dengan gaya bahasa natural. Di akhir, tanyakan: "Apakah kerangka ini sudah sesuai? Ketik 'LANJUT' untuk langsung mengeksekusi pembuatan dokumen desain utuh beserta lampirannya."
- TAHAP 2 (SETELAH KETIK 'LANJUT'): Lanjutkan generate seluruh dokumen lengkap hingga lampiran secara utuh tanpa terpotong.`
    : `ALUR EKSEKUSI LANGSUNG (1 KALI PROSES):
Susun seluruh bagian RPP dari Bagian A hingga Lampiran secara utuh, mendalam, operasional, estetik, dan **langsung render menjadi dokumen desain jadi lengkap dengan elemen visual (serta tautan Canva jika menggunakan Canva Connector)** dalam satu kali eksekusi.`;

  return `Bertindaklah sebagai Guru Pakar Penyusun Pembelajaran, Instructional Designer profesional, Expert Graphic Designer, dan Fasilitator Nasional Pembelajaran Mendalam jenjang SMP (Fase D).

Tugas Anda adalah menyusun dan merender dokumen **Rencana Pelaksanaan Pembelajaran (RPP) / Modul Ajar** yang sangat rapi, estetis, bernyawa, memuliakan peserta didik, serta langsung siap digunakan di kelas.

${instruksiTargetOutput}
${instruksiUniversalAntiAI}

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

*Catatan Fokus Kurikuler:* Pastikan seluruh skenario pembelajaran, LKPD, ilustrasi, dan instrumen asesmen terkunci secara presisi pada elemen **${elemen}** dan topik **${topik}**.

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
- **KOP / HEADER DOKUMEN:** Identitas satuan pendidikan yang bersih dan terstruktur rapi dengan sentuhan desain modern.
- **BAGIAN A — INFORMASI UMUM & IDENTIFIKASI:** Tabel Identitas RPP, Pemetaan Kesiapan Belajar Siswa, dan Matriks Dimensi Profil Lulusan.
- **BAGIAN B — DESAIN PEMBELAJARAN:** CP, TP Operasional, Pemahaman Bermakna, Pertanyaan Pemantik HOTS, serta Kerangka Pembelajaran.
- **BAGIAN C — PENGALAMAN BELAJAR (SKENARIO KEGIATAN):** Tabel langkah pembelajaran terperinci (Pendahuluan, Kegiatan Inti [1. Memahami, 2. Mengaplikasi, 3. Merefleksi], dan Penutup) lengkap dengan estimasi waktu, aktivitas guru sebagai aktivator, aktivitas siswa, diferensiasi, serta label prinsip 3M & 4 Olah.
- **BAGIAN D — ASESMEN PEMBELAJARAN:** Instrumen lengkap Asesmen Awal, Asesmen Proses, Asesmen Akhir, dan Rubrik Penilaian (${jenisRubrik}).
- **BAGIAN E — REFLEKSI, PENGAYAAN & REMEDIAL:** Panduan refleksi guru & siswa, serta program tindak lanjut.
- **BAGIAN F — LAMPIRAN LENGKAP:** LKPD Berbasis Aktivitas siap cetak/desain dengan ilustrasi pendukung, Bahan Bacaan Guru & Siswa, serta Lembar Pengesahan.

====================================================================
5. INSTRUKSI EKSEKUSI
====================================================================
${alurEksekusi}`;
}
