     const app = {
            state: {
                userData: {}, currentQ: 0, score: 0, timer: null, timeLeft: 20 * 60, selectedPlacement: null
            },

            init: function() {},

            goToSection: function(id) {
                document.querySelectorAll('section').forEach(s => {
                    s.classList.remove('active', 'fade-in'); s.classList.add('hidden');
                });
                const target = document.getElementById(`section-${id}`);
                target.classList.remove('hidden'); target.classList.add('active', 'fade-in');
                window.scrollTo(0, 0);
                if (id === 3) this.startTest();
            },

            handleFormSubmit: function(e) {
                e.preventDefault();
                const ism = document.getElementById('ism').value.trim();
                const telefon = document.getElementById('telefon').value.trim();
                const guruh = document.getElementById('guruh').value;
                const vaqt = document.getElementById('vaqt').value;
                const phoneError = document.getElementById('phoneError');
                let valid = true;
                if(!ism || !guruh || !vaqt) valid = false;
                const phoneRegex = /^\+998\d{9}$/;
                if (!phoneRegex.test(telefon)) {
                    document.getElementById('telefon').style.borderColor = '#ff2244';
                    phoneError.style.display = 'block'; valid = false;
                } else {
                    document.getElementById('telefon').style.borderColor = 'var(--border-color)';
                    phoneError.style.display = 'none';
                }
                if (valid) { this.state.userData = { ism, telefon, guruh, vaqt }; this.goToSection(3); }
            },

            startTest: function() {
                this.state.currentQ = 0; this.state.score = 0; this.state.timeLeft = 20 * 60;
                this.renderQuestion(); this.startTimer(); document.getElementById('nextBtn').innerText = "KEYINGI >>";
            },

            startTimer: function() {
                clearInterval(this.state.timer);
                const timerEl = document.getElementById('timer');
                this.state.timer = setInterval(() => {
                    this.state.timeLeft--;
                    const m = Math.floor(this.state.timeLeft / 60);
                    const s = this.state.timeLeft % 60;
                    timerEl.innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
                    timerEl.classList.remove('warning', 'danger');
                    if (this.state.timeLeft < 300) timerEl.classList.add('warning');
                    if (this.state.timeLeft < 120) timerEl.classList.add('danger');
                    if (this.state.timeLeft <= 0) { clearInterval(this.state.timer); this.finishTest(); }
                }, 1000);
            },

            renderQuestion: function() {
                const q = questions[this.state.currentQ];
                const container = document.getElementById('questionArea');
                document.getElementById('qProgress').innerText = `SAVOL ${this.state.currentQ + 1} / ${questions.length}`;
                document.getElementById('progressBar').style.width = `${((this.state.currentQ) / questions.length) * 100}%`;
                let html = `<div class="question-text">${q.q}</div><div class="options-grid">`;
                q.v.forEach((opt, idx) => {
                    html += `<div class="option-card" onclick="app.selectOption(${idx}, this)"><div class="radio-custom"></div><span>${opt}</span></div>`;
                });
                html += `</div>`; container.innerHTML = html; document.getElementById('nextBtn').disabled = true;
            },

            selectOption: function(idx, el) {
                document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                el.classList.add('selected'); this.state.currentAnswer = idx; document.getElementById('nextBtn').disabled = false;
            },

            nextQuestion: function() {
                if (this.state.currentAnswer === questions[this.state.currentQ].a) this.state.score++;
                this.state.currentQ++;
                if (this.state.currentQ >= questions.length) this.finishTest();
                else this.renderQuestion();
            },

            finishTest: function() {
                clearInterval(this.state.timer); this.calculateResults(); this.goToSection(4);
            },

            calculateResults: function() {
                const score = this.state.score; const total = questions.length; const percent = Math.round((score / total) * 100);
                let grade = 'F', colorClass = 'grade-F', msg = "Asoslarni mustahkam o'rganish kerak.";
                if (percent >= 90) { grade = 'A'; colorClass = 'grade-A'; msg = "A'lo! Siz Python Pro."; }
                else if (percent >= 75) { grade = 'B'; colorClass = 'grade-B'; msg = "Yaxshi natija. OOPga tayyorsiz."; }
                else if (percent >= 60) { grade = 'C'; colorClass = 'grade-C'; msg = "O'rtacha. Ko'proq amaliyot qiling."; }
                document.getElementById('finalScore').innerText = `${score} / ${total}`;
                const badge = document.getElementById('gradeBadge'); badge.className = `grade-badge ${colorClass}`; badge.innerText = grade;
                document.getElementById('analysisText').innerText = `Siz ${total} savoldan ${score} tasiga to'g'ri javob berdingiz. Natija: ${percent}%. ${msg}`;
            },

            selectPlacement: function(type, el) {
                this.state.selectedPlacement = type;
                document.querySelectorAll('.placement-card').forEach(c => { c.classList.remove('selected-p', 'selected-b'); });
                if (type.includes('Boshidan')) el.classList.add('selected-b'); else el.classList.add('selected-p');
                document.getElementById('submitResultBtn').disabled = false;
            },

            submitResults: async function() {
                const btn = document.getElementById('submitResultBtn'); btn.innerText = "YUBORILMOQDA..."; btn.disabled = true;
                const now = new Date();
                const resultData = {
                    ism: this.state.userData.ism, telefon: this.state.userData.telefon, guruh: this.state.userData.guruh, vaqt: this.state.userData.vaqt,
                    ball: this.state.score, jami: questions.length, foiz: Math.round((this.state.score / questions.length) * 100),
                    baho: document.getElementById('gradeBadge').innerText, boshlanish: this.state.selectedPlacement,
                    sana: now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5)
                };
                if (typeof window.sendToTelegram === 'function') {
                    try { await window.sendToTelegram(resultData); } catch (err) { console.error("Xatolik:", err); }
                } else { console.warn("message.js topilmadi:", resultData); }
                document.querySelector('.placement-options').style.opacity = '0.5';
                document.querySelector('.placement-options').style.pointerEvents = 'none';
                btn.style.display = 'none'; document.getElementById('successMsg').style.display = 'block';
            }
        };
        window.addEventListener('DOMContentLoaded', () => app.init());
        
