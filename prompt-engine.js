/**
 * Prompt Engine — Studio RPP SMP Pembelajaran Mendalam
 * Mengintegrasikan prinsip Pembelajaran Mendalam, CP Fase D,
 * serta Instruksi Universal Lintas AI (Anti-AI Look & Professional Formatting).
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

  // Instruksi Universal Lintas AI untuk Menjamin Kerapian Maksimal
  let instruksiUniversalAI = `
====================================================================
ATURAN UTAMA OUTPUT & FORMAT (UNIVERSAL LINTAS PLATFORM AI)
====================================================================
1. **ANTI-AI LOOK & GAYA BAHASA HUMANIS:**
   - JANGAN gunakan pengantar klise robotik (seperti "Dalam era modern ini...", "Penting untuk dicatat...", atau "Modul ajar ini dirancang untuk..."). 
   - Gunakan bahasa Indonesia baku yang luwes, bernyawa, praktis, dan ditulis dengan sudut pandang **Guru Pakar Penyusun Pembelajaran** yang sangat berpengalaman di kelas nyata.
2. **STANDAR TATA LETAK & KERAPIAN DOKUMEN:**
   - Gunakan hierarki heading yang bersih, terstruktur, dan konsisten (Bagian A, B, C, dst.).
   - Rancang tabel (seperti identitas, matriks kesiapan, dan skenario pembelajaran) dengan format baris/kolom yang jelas, padat isi, dan mudah disalin ke dokumen atau platform desain.
3. **GARANSI KELENGKAPAN:** 
   - Apapun platform AI yang digunakan, pastikan dokumen disusun lengkap secara utuh dari Bagian A hingga Lampiran tanpa terpotong atau diringkas secara berlebihan.
`;

  let instruksiFormatSpesifik = "";
  if (formatFile === "CANVAS" || formatFile === "CANVA") {
    instruksiFormatSpesifik = `[TARGET: CANVA / DOKUMEN INTERAKTIF]
- Susun teks dalam blok-blok konten terstruktur (Cards / Callout format) agar sangat mudah disalin ke elemen desain Canva Docs atau Presentasi Canva.`;
  } else if (formatFile === "DOCX") {
    instruksiFormatSpesifik = `[TARGET: MICROSOFT WORD / .DOCX]
- Susun format teks dengan struktur tabel profesional dan hierarki rapi yang siap diekspor menjadi file dokumen siap unduh.`;
  } else {
    instruksiFormatSpesifik = `[TARGET: DOKUMEN STANDAR PROFESIONAL]
- Sajikan dokumen secara bersih dengan pemformatan heading dan tabel rapi siap pakai.`;
  }

  const alurEksekusi = modeOutput === "bertahap"
    ? `ALUR EKSEKUSI DUA TAHAP:
- TAHAP 1: Tampilkan kerangka inti RPP (Bagian A sampai D) terlebih dahulu dengan gaya bahasa natural. Di akhir, tanyakan: "Apakah kerangka ini sudah sesuai dan rapi? Ketik 'LANJUT' untuk meng-generate dokumen lengkap."
- TAHAP 2 (SETELAH KETIK 'LANJUT'): Lanjutkan generate seluruh bagian dokumen hingga lampiran secara utuh tanpa terpotong.`
    : `ALUR EKSEKUSI LANGSUNG (1 KALI PROSES):
Susun seluruh bagian RPP dari Bagian A hingga Lampiran secara utuh, mendalam, operasional, berestetika tinggi, dan **bebas dari gaya bahasa robotik AI** dalam satu kali eksekusi.`;

  return `Bertindaklah sebagai Guru Pakar Penyusun Pembelajaran, Pakar Desain Instruksional Kurikulum Merdeka, dan Fasilitator Nasional Pembelajaran Mendalam jenjang SMP (Fase D).

Tugas Anda adalah menyusun dokumen **Rencana Pelaksanaan Pembelajaran (RPP) / Modul Ajar** yang sangat rapi, profesional, memuliakan peserta didik, menggunakan bahasa guru penggerak yang natural (bebas dari kesan AI kaku), serta langsung siap pakai.

${instruksiUniversalAI}
${instruksiFormatSpesifik}

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