/**
 * App Controller — Studio RPP SMP (5-Step Wizard)
 */

document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 1;
  const totalSteps = 5;

  // Wizard Elements
  const stepTabs = document.querySelectorAll(".step-tab");
  const stepPanels = document.querySelectorAll(".step-panel");
  const progressFill = document.getElementById("wizard-progress-fill");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const stepIndicatorText = document.getElementById("step-indicator-text");

  // Topbar Action Buttons
  const btnCopyTop = document.getElementById("btn-copy-top");
  const btnSample = document.getElementById("btn-sample");
  const btnReset = document.getElementById("btn-reset");

  // Form Inputs
  const elKelas = document.getElementById("kelas");
  const elSemester = document.getElementById("semester");
  const elMapel = document.getElementById("mapel");
  const elAlokasi = document.getElementById("alokasi");
  const elCustomMapelWrap = document.getElementById("custom-mapel-wrap");
  const elCustomMapel = document.getElementById("custom-mapel");

  const elElemen = document.getElementById("elemen");
  const elTopik = document.getElementById("topik");
  const elCustomTopikWrap = document.getElementById("custom-topik-wrap");
  const elCustomTopik = document.getElementById("custom-topik");

  const elNamaSekolah = document.getElementById("nama-sekolah");
  const elNamaGuru = document.getElementById("nama-guru");

  const elCpText = document.getElementById("cp-text");
  const elTpText = document.getElementById("tp-text");

  const elDimensiBoxes = document.querySelectorAll("#dimensi-grid input[type='checkbox']");
  const elPedagogi = document.getElementById("pedagogi");
  const elLingkungan = document.getElementById("lingkungan");
  const elKemitraan = document.getElementById("kemitraan");
  const elDigital = document.getElementById("digital");
  const elKonteksLokalSelect = document.getElementById("konteks-lokal-select");
  const elCustomKonteksWrap = document.getElementById("custom-konteks-wrap");
  const elKonteksLokal = document.getElementById("konteks-lokal");

  const elKomponenBoxes = document.querySelectorAll("#komponen-grid input[type='checkbox']");
  const elLampiranBoxes = document.querySelectorAll("#lampiran-grid input[type='checkbox']");

  const elTaksonomi = document.getElementById("taksonomi");
  const elJenisRubrik = document.getElementById("jenis-rubrik");
  const elAsesmenBoxes = document.querySelectorAll("#asesmen-grid input[type='checkbox']");

  const elFormatFile = document.getElementById("format-file");
  const elGayaLayout = document.getElementById("gaya-layout");
  const elModeOutput = document.getElementById("mode-output");
  const elBahasaDokumen = document.getElementById("bahasa-dokumen");

  // Terminal Elements
  const elPromptOutput = document.getElementById("prompt-output");
  const elWordCount = document.getElementById("word-count");
  const elBtnCopy = document.getElementById("btn-copy");
  const elCopyText = document.getElementById("copy-text");
  const elBtnDownload = document.getElementById("btn-download");

  // --- WIZARD NAVIGATION ---
  function goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > totalSteps) return;
    currentStep = stepNumber;

    stepTabs.forEach((tab) => {
      const s = Number(tab.dataset.step);
      tab.classList.remove("active", "completed");
      if (s === currentStep) {
        tab.classList.add("active");
      } else if (s < currentStep) {
        tab.classList.add("completed");
      }
    });

    stepPanels.forEach((panel, idx) => {
      panel.classList.toggle("active", idx + 1 === currentStep);
    });

    const pct = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${pct}%`;
    stepIndicatorText.textContent = `Langkah ${currentStep} dari ${totalSteps}`;

    btnPrev.disabled = currentStep === 1;
    btnNext.textContent = currentStep === totalSteps ? "Selesai ✓" : "Selanjutnya →";
  }

  stepTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      goToStep(Number(tab.dataset.step));
    });
  });

  btnPrev.addEventListener("click", () => goToStep(currentStep - 1));
  btnNext.addEventListener("click", () => {
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1);
    } else {
      elBtnCopy.click();
    }
  });

  // --- DROPDOWN KURIKULUM ---
  function initMapel() {
    elMapel.innerHTML = "";
    Object.keys(KURIKULUM_DATA).forEach((mapelName) => {
      const opt = document.createElement("option");
      opt.value = mapelName;
      opt.textContent = mapelName;
      elMapel.appendChild(opt);
    });

    const customOpt = document.createElement("option");
    customOpt.value = "__CUSTOM__";
    customOpt.textContent = "Lainnya (Ketik Mata Pelajaran Sendiri)";
    elMapel.appendChild(customOpt);
  }

  function updateElemenOptions() {
    const selectedMapel = elMapel.value;
    elElemen.innerHTML = "";

    if (selectedMapel === "__CUSTOM__") {
      elCustomMapelWrap.style.display = "block";
      const opt = document.createElement("option");
      opt.value = "Elemen & Capaian Pembelajaran Fase D";
      opt.textContent = "Elemen & Capaian Pembelajaran Fase D";
      elElemen.appendChild(opt);
      updateTopikOptions();
      return;
    }

    elCustomMapelWrap.style.display = "none";
    const mapelObj = KURIKULUM_DATA[selectedMapel];
    if (!mapelObj) return;

    Object.keys(mapelObj.elemen).forEach((elemenName) => {
      const opt = document.createElement("option");
      opt.value = elemenName;
      opt.textContent = elemenName;
      elElemen.appendChild(opt);
    });

    updateTopikOptions();
  }

  function updateTopikOptions() {
    const selectedMapel = elMapel.value;
    const selectedElemen = elElemen.value;
    const selectedKelas = elKelas.value;
    const selectedSemester = elSemester.value;

    elTopik.innerHTML = "";

    if (selectedMapel !== "__CUSTOM__" && KURIKULUM_DATA[selectedMapel]) {
      const elemenObj = KURIKULUM_DATA[selectedMapel].elemen[selectedElemen];
      const daftarTopik = elemenObj?.topik?.[selectedKelas]?.[selectedSemester] || [];

      daftarTopik.forEach((item, idx) => {
        const opt = document.createElement("option");
        opt.value = String(idx);
        opt.textContent = item.judul;
        elTopik.appendChild(opt);
      });
    }

    const customTopikOpt = document.createElement("option");
    customTopikOpt.value = "__CUSTOM_TOPIK__";
    customTopikOpt.textContent = "Lainnya (Ketik Topik Sendiri)";
    elTopik.appendChild(customTopikOpt);

    syncCpAndTp();
  }

  function syncCpAndTp() {
    const selectedMapel = elMapel.value;
    const selectedElemen = elElemen.value;
    const selectedKelas = elKelas.value;
    const selectedSemester = elSemester.value;
    const selectedTopikIdx = elTopik.value;

    if (selectedMapel === "__CUSTOM__") {
      elCustomTopikWrap.style.display = "block";
      elCpText.value = "Peserta didik mampu memahami konsep esensial, menerapkan keterampilan proses, dan merefleksikan nilai-nilai pembelajaran sesuai Capaian Pembelajaran Fase D.";
      elTpText.value = "Peserta didik mampu menganalisis konsep pokok materi, mengaplikasikannya dalam pemecahan masalah nyata, serta merefleksikan pengalaman belajarnya secara bermakna.";
      renderPrompt();
      return;
    }

    const mapelObj = KURIKULUM_DATA[selectedMapel];
    const elemenObj = mapelObj.elemen[selectedElemen];
    const daftarTopik = elemenObj?.topik?.[selectedKelas]?.[selectedSemester] || [];

    elCpText.value = `${elemenObj.cpElemen} (${mapelObj.cpUmum})`;

    if (selectedTopikIdx === "__CUSTOM_TOPIK__") {
      elCustomTopikWrap.style.display = "block";
      elTpText.value = "Peserta didik mampu memahami konsep esensial, mengaplikasikan dalam konteks kehidupan nyata, dan merefleksikan proses belajarnya secara kritis dan kolaboratif.";
    } else {
      elCustomTopikWrap.style.display = "none";
      const topikObj = daftarTopik[Number(selectedTopikIdx)];
      if (topikObj) {
        elTpText.value = topikObj.tp;
      }
    }

    renderPrompt();
  }

  function updateKonteksLokalUI() {
    if (elKonteksLokalSelect.value === "__CUSTOM_KONTEKS__") {
      elCustomKonteksWrap.style.display = "block";
    } else {
      elCustomKonteksWrap.style.display = "none";
    }
    renderPrompt();
  }

  // --- RENDER PROMPT ---
  function getCheckedValues(nodeList) {
    return Array.from(nodeList)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);
  }

  function renderPrompt() {
    const mapelFinal = elMapel.value === "__CUSTOM__"
      ? (elCustomMapel.value.trim() || "Mata Pelajaran Umum SMP")
      : elMapel.value;

    let topikFinal = "";
    if (elMapel.value === "__CUSTOM__" || elTopik.value === "__CUSTOM_TOPIK__") {
      topikFinal = elCustomTopik.value.trim() || "Topik Pembelajaran Kontekstual";
    } else {
      const selectedOption = elTopik.options[elTopik.selectedIndex];
      topikFinal = selectedOption ? selectedOption.textContent : "";
    }

    const konteksLokalFinal = elKonteksLokalSelect.value === "__CUSTOM_KONTEKS__"
      ? elKonteksLokal.value.trim()
      : "";

    const promptText = buildDeepLearningPrompt({
      kelas: elKelas.value,
      semester: elSemester.value,
      mapel: mapelFinal,
      alokasi: elAlokasi.value,
      elemen: elElemen.value,
      topik: topikFinal,
      namaSekolah: elNamaSekolah.value.trim(),
      namaGuru: elNamaGuru.value.trim(),
      cp: elCpText.value.trim(),
      tp: elTpText.value.trim(),
      dimensiList: getCheckedValues(elDimensiBoxes),
      pedagogi: elPedagogi.value,
      lingkungan: elLingkungan.value,
      kemitraan: elKemitraan.value,
      digital: elDigital.value,
      konteksLokal: konteksLokalFinal,
      komponenList: getCheckedValues(elKomponenBoxes),
      lampiranList: getCheckedValues(elLampiranBoxes),
      taksonomi: elTaksonomi.value,
      jenisRubrik: elJenisRubrik.value,
      asesmenList: getCheckedValues(elAsesmenBoxes),
      formatFile: elFormatFile.value,
      gayaLayout: elGayaLayout.value,
      modeOutput: elModeOutput.value,
      bahasaDokumen: elBahasaDokumen.value
    });

    elPromptOutput.textContent = promptText;
    const words = promptText.trim().split(/\s+/).filter(Boolean).length;
    elWordCount.textContent = `${words} kata`;
  }

  // --- CONTOH ISI & RESET ---
  btnSample.addEventListener("click", () => {
    elKelas.value = "VIII";
    elSemester.value = "Ganjil";
    elMapel.value = "IPA";
    updateElemenOptions();
    elTopik.value = "1";
    syncCpAndTp();
    elAlokasi.value = "2 Pertemuan (5 x 40 Menit)";
    elNamaSekolah.value = "SMP Negeri 1 Cendekia";
    elNamaGuru.value = "Fajar T. H., S.Pd.";
    elKonteksLokalSelect.value = "__CUSTOM_KONTEKS__";
    updateKonteksLokalUI();
    elKonteksLokal.value = "Kaitkan dengan kebiasaan jajanan sehat di kantin sekolah dan pencegahan anemia pada remaja SMP.";
    elFormatFile.value = "DOCX";
    renderPrompt();
  });

  btnReset.addEventListener("click", () => {
    elKelas.value = "VII";
    elSemester.value = "Ganjil";
    elMapel.selectedIndex = 0;
    elAlokasi.selectedIndex = 0;
    elNamaSekolah.value = "";
    elNamaGuru.value = "";
    elCustomMapel.value = "";
    elCustomTopik.value = "";
    elKonteksLokalSelect.value = "Serahkan ke AI";
    updateKonteksLokalUI();
    elKonteksLokal.value = "";
    updateElemenOptions();
    goToStep(1);
  });

  // --- COPY & DOWNLOAD ---
  async function copyPromptToClipboard() {
    const text = elPromptOutput.textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    elBtnCopy.classList.add("copied");
    elCopyText.textContent = "Berhasil Disalin!";
    btnCopyTop.classList.add("copied");
    btnCopyTop.querySelector("span").textContent = "TERCOPY ✓";

    setTimeout(() => {
      elBtnCopy.classList.remove("copied");
      elCopyText.textContent = "Salin Prompt RPP";
      btnCopyTop.classList.remove("copied");
      btnCopyTop.querySelector("span").textContent = "SALIN PROMPT";
    }, 2200);
  }

  elBtnCopy.addEventListener("click", copyPromptToClipboard);
  btnCopyTop.addEventListener("click", copyPromptToClipboard);

  elBtnDownload.addEventListener("click", () => {
    const text = elPromptOutput.textContent;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const mapelSlug = elMapel.value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    a.href = url;
    a.download = `prompt-rpp-${mapelSlug}-kelas-${elKelas.value}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // --- EVENT BINDINGS ---
  elKelas.addEventListener("change", updateTopikOptions);
  elSemester.addEventListener("change", updateTopikOptions);
  elMapel.addEventListener("change", updateElemenOptions);
  elElemen.addEventListener("change", updateTopikOptions);
  elTopik.addEventListener("change", syncCpAndTp);
  elKonteksLokalSelect.addEventListener("change", updateKonteksLokalUI);

  const liveControls = [
    elAlokasi, elCustomMapel, elCustomTopik, elNamaSekolah, elNamaGuru,
    elCpText, elTpText, elPedagogi, elLingkungan, elKemitraan,
    elDigital, elKonteksLokal, elTaksonomi, elJenisRubrik,
    elFormatFile, elGayaLayout, elModeOutput, elBahasaDokumen
  ];

  liveControls.forEach((ctrl) => {
    ctrl.addEventListener("input", renderPrompt);
    ctrl.addEventListener("change", renderPrompt);
  });

  document.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    cb.addEventListener("change", renderPrompt);
  });

  // Init
  initMapel();
  updateElemenOptions();
  goToStep(1);
});