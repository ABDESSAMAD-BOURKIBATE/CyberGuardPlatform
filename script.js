// Language data for results
const resultMessages = {
    ar: {
        passwordEmpty: 'الرجاء إدخال كلمة مرور.',
        passwordStrength: {
            1: 'ضعيف جدًا: كلمة المرور قصيرة جدًا.',
            2: 'ضعيف: حاول إضافة المزيد من الأحرف.',
            3: 'متوسط: حاول تضمين أرقام ورموز خاصة.',
            4: 'قوي: كلمة مرور جيدة، ولكن يمكن تحسينها.',
            5: 'قوي جدًا: كلمة مرور ممتازة!'
        },
        entropyEmpty: 'كلمة المرور فارغة أو غير صالحة.',
        entropyResult: (entropy) => `الإنتروبيا: ${entropy.toFixed(2)} بت\n(كلمة مرور قوية عادةً > 80 بت)`,
        passwordLengthInvalid: 'الرجاء إدخال طول بين 8 و64.',
        leakEmpty: 'الرجاء إدخال كلمة مرور.',
        leakFound: 'تحذير: تم العثور على كلمة المرور في قوائم التسريب الشائعة!',
        leakNotFound: 'لم يتم العثور على تسريبات لكلمة المرور (محاكاة).',
        hashEmpty: 'الرجاء إدخال نص للتشفير.',
        hashInvalidType: 'نوع هاش غير صالح.',
        hashResult: (type, hash) => `الهاش (${type.toUpperCase()}): ${hash}`,
        fileEmpty: 'الرجاء اختيار ملف.',
        fileTooLarge: 'الملف كبير جدًا (الحد الأقصى 10 ميجابايت).',
        fileReadError: 'خطأ أثناء قراءة الملف.',
        fileHashResult: (type, hash) => `هاش الملف (${type.toUpperCase()}): ${hash}`,
        base64Empty: 'الرجاء إدخال نص.',
        base64InvalidEncode: 'خطأ: إدخال غير صالح للتشفير.',
        base64InvalidDecode: 'خطأ: إدخال غير صالح لفك التشفير.',
        ipEmpty: 'الرجاء إدخال عنوان IP.',
        ipResult: (ip) => `تحديد موقع ${ip}: \nالمدينة: عينة\nالبلد: عينة\n(هذه استجابة وهمية)`,
        myIPResult: 'عنوان IP الخاص بك: 192.168.1.100 (محاكاة)',
        portScanEmpty: 'الرجاء إدخال عنوان IP ونطاق المنافذ.',
        portScanResult: (ip, range) => `فحص ${ip} لنطاق ${range}:\nالمنافذ المفتوحة: 80, 443 (محاكاة)`,
        urlEmpty: 'الرجاء إدخال رابط.',
        urlSafe: (url) => `فحص ${url}:\nالحالة: آمن (محاكاة)`,
        urlSuspicious: (url) => `تحذير: الرابط ${url} يبدو مشبوهًا (محاكاة)`,
        cryptoEmpty: 'الرجاء إدخال النص ومفتاح التشفير.',
        cryptoInvalidType: 'نوع تشفير غير صالح.',
        cryptoInvalidDecrypt: 'خطأ: مفتاح أو نص غير صالح.',
        cryptoEncryptResult: (type, encrypted) => `النص المشفر (${type.toUpperCase()}): ${encrypted}`,
        cryptoDecryptResult: (decrypted) => `النص المفكوك: ${decrypted}`,
        darkWebEmpty: 'الرجاء إدخال بريد إلكتروني أو اسم مستخدم.',
        darkWebResult: (input) => `فحص الويب المظلم لـ ${input}:\nلم يتم العثور على بيانات في الويب المظلم (محاكاة)`,
        trafficResult: (packets, speed) => `محاكاة حركة الشبكة:\nعدد الحزم: ${packets}\nسرعة النقل: ${speed} KB/s`,
        sqlEmpty: 'الرجاء إدخال استعلام SQL.',
        sqlVulnerable: (query) => `تحذير: الاستعلام "${query}" يحتوي على نمط حقن SQL محتمل!`,
        sqlSafe: (query) => `الاستعلام "${query}" يبدو آمنًا (محاكاة).`,
        xssEmpty: 'الرجاء إدخال سكربت أو HTML.',
        xssVulnerable: (input) => `تحذير: الإدخال "${input}" يحتوي على نمط XSS محتمل!`,
        xssSafe: (input) => `الإدخال "${input}" يبدو آمنًا (محاكاة).`,
        latencyEmpty: 'الرجاء إدخال URL أو عنوان IP.',
        latencyResult: (target, latency) => `اختبار زمن التأخير لـ ${target}:\nزمن الاستجابة: ${latency} مللي ثانية (محاكاة)`,
        complexityEmpty: 'الرجاء إدخال كلمة مرور.',
        complexityResult: (score, details) => `تعقيد كلمة المرور: ${score}%\n${details}`,
        copySuccess: 'تم نسخ النتيجة إلى الحافظة!',
        copyEmpty: 'لا توجد نتيجة لنسخها.',
        savedData: 'تم حفظ البيانات بنجاح!',
        saveError: 'خطأ أثناء حفظ البيانات.'
    },
    en: {
        passwordEmpty: 'Please enter a password.',
        passwordStrength: {
            1: 'Very Weak: Password is too short.',
            2: 'Weak: Try adding more characters.',
            3: 'Medium: Try including numbers and special characters.',
            4: 'Strong: Good password, but can be improved.',
            5: 'Very Strong: Excellent password!'
        },
        entropyEmpty: 'Password is empty or invalid.',
        entropyResult: (entropy) => `Entropy: ${entropy.toFixed(2)} bits\n(Strong password usually > 80 bits)`,
        passwordLengthInvalid: 'Please enter a length between 8 and 64.',
        leakEmpty: 'Please enter a password.',
        leakFound: 'Warning: Password found in common leak lists!',
        leakNotFound: 'No leaks found for the password (simulation).',
        hashEmpty: 'Please enter text to hash.',
        hashInvalidType: 'Invalid hash type.',
        hashResult: (type, hash) => `Hash (${type.toUpperCase()}): ${hash}`,
        fileEmpty: 'Please select a file.',
        fileTooLarge: 'File is too large (max 10 MB).',
        fileReadError: 'Error reading the file.',
        fileHashResult: (type, hash) => `File Hash (${type.toUpperCase()}): ${hash}`,
        base64Empty: 'Please enter text.',
        base64InvalidEncode: 'Error: Invalid input for encoding.',
        base64InvalidDecode: 'Error: Invalid input for decoding.',
        ipEmpty: 'Please enter an IP address.',
        ipResult: (ip) => `Geolocation for ${ip}: \nCity: Sample\nCountry: Sample\n(This is a mock response)`,
        myIPResult: 'Your IP address: 192.168.1.100 (simulation)',
        portScanEmpty: 'Please enter an IP address and port range.',
        portScanResult: (ip, range) => `Scanning ${ip} for range ${range}:\nOpen ports: 80, 443 (simulation)`,
        urlEmpty: 'Please enter a URL.',
        urlSafe: (url) => `Checking ${url}:\nStatus: Safe (simulation)`,
        urlSuspicious: (url) => `Warning: The URL ${url} appears suspicious (simulation)`,
        cryptoEmpty: 'Please enter text and encryption key.',
        cryptoInvalidType: 'Invalid encryption type.',
        cryptoInvalidDecrypt: 'Error: Invalid key or text.',
        cryptoEncryptResult: (type, encrypted) => `Encrypted Text (${type.toUpperCase()}): ${encrypted}`,
        cryptoDecryptResult: (decrypted) => `Decrypted Text: ${decrypted}`,
        darkWebEmpty: 'Please enter an email or username.',
        darkWebResult: (input) => `Dark Web scan for ${input}:\nNo data found on the dark web (simulation)`,
        trafficResult: (packets, speed) => `Network Traffic Simulation:\nPackets: ${packets}\nTransfer Speed: ${speed} KB/s`,
        sqlEmpty: 'Please enter an SQL query.',
        sqlVulnerable: (query) => `Warning: The query "${query}" contains a potential SQL injection pattern!`,
        sqlSafe: (query) => `The query "${query}" appears safe (simulation).`,
        xssEmpty: 'Please enter a script or HTML.',
        xssVulnerable: (input) => `Warning: The input "${input}" contains a potential XSS pattern!`,
        xssSafe: (input) => `The input "${input}" appears safe (simulation).`,
        latencyEmpty: 'Please enter a URL or IP address.',
        latencyResult: (target, latency) => `Latency test for ${target}:\nResponse Time: ${latency} ms (simulation)`,
        complexityEmpty: 'Please enter a password.',
        complexityResult: (score, details) => `Password Complexity: ${score}%\n${details}`,
        copySuccess: 'Result copied to clipboard!',
        copyEmpty: 'No result to copy.',
        savedData: 'Data saved successfully!',
        saveError: 'Error saving data.'
    }
};

// Current language
let currentLang = 'ar';

// Network Monitor state
let activeScans = 0;
let networkTraffic = 0;
let monitorInterval = null;

// Custom Cursor
const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

// Mouse Movement Animation for Tool Cards
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        card.style.transform = `translateY(-8px) scale(1.02) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
    });
});

// Typing Effect with Sound - محسن لتجنب التقطيع خاصة للنص العربي
function typeText(element, text, speed = 30, callback) {
    if (!element || !text) {
        if (callback) callback();
        return;
    }
    
    const typingSound = document.getElementById('typingSound');
    element.textContent = '';
    element.classList.add('typing-effect');
    
    // للنص العربي، نستخدم Array.from للتعامل مع الأحرف المركبة بشكل صحيح
    const isArabic = /[\u0600-\u06FF]/.test(text);
    let chars;
    
    if (isArabic) {
        // للنص العربي: نقسم على أساس الكلمات بدلاً من الأحرف لتجنب التقطيع
        chars = text.split(' ');
        let i = 0;
        let currentText = '';
        
        function typeWord() {
            if (i < chars.length) {
                if (i > 0) currentText += ' ';
                currentText += chars[i];
                element.textContent = currentText;
                
                if (typingSound && i % 2 === 0) {
                    typingSound.currentTime = 0;
                    typingSound.play().catch(e => {/* ignore audio errors */});
                }
                i++;
                setTimeout(typeWord, speed * 3); // أبطأ قليلاً للنص العربي
            } else {
                element.classList.remove('typing-effect');
                if (callback) callback();
            }
        }
        typeWord();
    } else {
        // للنص الإنجليزي: نستخدم الطريقة العادية
        chars = Array.from(text);
        let i = 0;
        
        function type() {
            if (i < chars.length) {
                element.textContent += chars[i];
                if (typingSound && i % 3 === 0) {
                    typingSound.currentTime = 0;
                    typingSound.play().catch(e => {/* ignore audio errors */});
                }
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('typing-effect');
                if (callback) callback();
            }
        }
        type();
    }
}

// Initialize Typing Effect for Header - محسن
document.addEventListener('DOMContentLoaded', () => {
    try {
        const headerTitle = document.querySelector('.header h1 .typing-effect');
        const headerSubtitle = document.querySelector('.header p.typing-effect');
        
        if (headerTitle && headerSubtitle) {
            const titleText = headerTitle.getAttribute('data-ar');
            const subtitleText = headerSubtitle.getAttribute('data-ar');
            
            if (titleText) {
                typeText(headerTitle, titleText, 25, () => {
                    if (subtitleText) {
                        typeText(headerSubtitle, subtitleText, 25);
                    }
                });
            }
        }
        
        startNetworkMonitor();
        initializeNetworkMonitor();
        loadStoredData();
        initializeTooltips();
    } catch (e) {
        console.error('Error in DOMContentLoaded:', e);
    }
});

// Initialize tooltips and interactive elements
function initializeTooltips() {
    try {
        // Add hover effects for explain buttons
        document.querySelectorAll('.explain-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.6)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            });
        });
    } catch (e) {
        console.error('Error initializing tooltips:', e);
    }
}

// Save input data to localStorage with Base64 encoding
function saveInputData(inputId, value) {
    try {
        if (value) {
            const encoded = btoa(value);
            localStorage.setItem(inputId, encoded);
            console.log(resultMessages[currentLang].savedData);
        }
    } catch (e) {
        console.error('Error saving data:', e);
        alert(resultMessages[currentLang].saveError);
    }
}

// Load stored data from localStorage
function loadStoredData() {
    try {
        const inputs = [
            'password', 'entropyPassword', 'leakPassword', 'hashInput', 'base64Input',
            'ipAddress', 'targetIP', 'portRange', 'urlInput', 'cryptoInput',
            'cryptoKey', 'darkWebInput', 'sqlInput', 'xssInput', 'latencyTarget',
            'complexityPassword'
        ];
        inputs.forEach(id => {
            const encoded = localStorage.getItem(id);
            if (encoded) {
                try {
                    const decoded = atob(encoded);
                    document.getElementById(id).value = decoded;
                } catch (e) {
                    console.error(`Error decoding data for ${id}:`, e);
                }
            }
        });
    } catch (e) {
        console.error('Error loading stored data:', e);
    }
}

// Language Switching with Enhanced Header Update
function switchLanguage(lang) {
    try {
        currentLang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-btn[onclick="switchLanguage('${lang}')"]`);
        if (activeBtn) activeBtn.classList.add('active');

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update header with smooth typing effect
        const headerTitle = document.querySelector('.header h1 .typing-effect');
        const headerSubtitle = document.querySelector('.header p.typing-effect');
        
        if (headerTitle) {
            const titleText = headerTitle.getAttribute(`data-${lang}`);
            if (titleText) {
                // إضافة class خاص للنص العربي
                if (lang === 'ar') {
                    headerTitle.classList.add('arabic-text');
                } else {
                    headerTitle.classList.remove('arabic-text');
                }
                typeText(headerTitle, titleText, lang === 'ar' ? 40 : 25);
            }
        }
        
        if (headerSubtitle) {
            const subtitleText = headerSubtitle.getAttribute(`data-${lang}`);
            if (subtitleText) {
                setTimeout(() => {
                    if (lang === 'ar') {
                        headerSubtitle.classList.add('arabic-text');
                    } else {
                        headerSubtitle.classList.remove('arabic-text');
                    }
                    typeText(headerSubtitle, subtitleText, lang === 'ar' ? 40 : 25);
                }, 800);
            }
        }

        // Update other elements instantly
        document.querySelectorAll('[data-en][data-ar]:not(.typing-effect)').forEach(elem => {
            const newText = elem.getAttribute(`data-${lang}`);
            if (newText) {
                elem.textContent = newText;
                // For elements with HTML content
                if (elem.innerHTML !== elem.textContent) {
                    elem.innerHTML = newText;
                }
            }
        });

        // Update network monitor text
        const monitor = document.getElementById('networkMonitor');
        const monitorText = monitor?.querySelector('.monitor-text');
        if (monitorText) {
            if (monitor.classList.contains('compact')) {
                monitorText.textContent = lang === 'ar' ? 'المراقب' : 'Monitor';
            } else {
                monitorText.textContent = lang === 'ar' ? 'إخفاء المراقب' : 'Hide Monitor';
            }
        }

        // Update placeholders
        document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach(elem => {
            elem.placeholder = elem.getAttribute(`data-placeholder-${lang}`);
        });

        // Update modal content language
        updateModalLanguage();

        // Refresh results to match the new language
        refreshAllResults();
    } catch (e) {
        console.error('Error switching language:', e);
    }
}

// Refresh all tool results in the current language
function refreshAllResults() {
    const tools = [
        { id: 'passwordResult', func: analyzePassword },
        { id: 'entropyResult', func: calculateEntropy },
        { id: 'generatedPasswordResult', func: generateSecurePassword },
        { id: 'leakResult', func: checkPasswordLeak },
        { id: 'hashResult', func: generateHash },
        { id: 'fileHashResult', func: checkFileHash },
        { id: 'base64Result', func: () => {
            const lastAction = document.getElementById('base64Result').dataset.lastAction;
            if (lastAction === 'encode') encodeBase64();
            else if (lastAction === 'decode') decodeBase64();
        }},
        { id: 'ipResult', func: geolocateIP },
        { id: 'portScanResult', func: simulatePortScan },
        { id: 'urlResult', func: checkURLSecurity },
        { id: 'cryptoResult', func: () => {
            const lastAction = document.getElementById('cryptoResult').dataset.lastAction;
            if (lastAction === 'encrypt') encryptText();
            else if (lastAction === 'decrypt') decryptText();
        }},
        { id: 'darkWebResult', func: scanDarkWeb },
        { id: 'trafficResult', func: simulateNetworkTraffic },
        { id: 'sqlResult', func: testSQLInjection },
        { id: 'xssResult', func: scanXSS },
        { id: 'latencyResult', func: testNetworkLatency },
        { id: 'complexityResult', func: visualizeComplexity }
    ];

    tools.forEach(tool => {
        const resultBox = document.getElementById(tool.id);
        if (resultBox.textContent && resultBox.textContent !== resultMessages[currentLang].copyEmpty) {
            tool.func();
        }
    });
}

// Copy Result to Clipboard
function copyResult(resultId) {
    try {
        const resultBox = document.getElementById(resultId);
        const text = resultBox.textContent;
        if (!text || text === resultMessages[currentLang].copyEmpty) {
            typeText(resultBox, resultMessages[currentLang].copyEmpty, 50);
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            typeText(resultBox, resultMessages[currentLang].copySuccess, 50, () => {
                setTimeout(() => {
                    const tool = tools.find(t => t.id === resultId);
                    if (tool) tool.func();
                }, 1000);
            });
        }).catch(e => {
            console.error('Error copying to clipboard:', e);
            typeText(resultBox, 'Error copying to clipboard.', 50);
        });
    } catch (e) {
        console.error('Error in copyResult:', e);
        typeText(document.getElementById(resultId), 'Error copying to clipboard.', 50);
    }
}

// Tool Explanations Data
const toolExplanations = {
    ar: {
        passwordStrength: {
            title: "محلل قوة كلمة المرور",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
            content: `
                <div class="explanation-section">
                    <h4>ما هي هذه الأداة؟</h4>
                    <p>محلل قوة كلمة المرور هو أداة متقدمة تقوم بتحليل شامل لكلمات المرور لتحديد مستوى قوتها وأمانها ضد الهجمات السيبرانية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف تعمل؟</h4>
                    <ul>
                        <li>تحليل طول كلمة المرور والتعقيد</li>
                        <li>فحص استخدام الأحرف الكبيرة والصغيرة</li>
                        <li>التحقق من وجود الأرقام والرموز الخاصة</li>
                        <li>تقييم المقاومة ضد هجمات القاموس</li>
                        <li>حساب الوقت المطلوب لكسر كلمة المرور</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>معايير التقييم</h4>
                    <ul>
                        <li><strong>ضعيف جداً:</strong> أقل من 8 أحرف أو أنماط بسيطة</li>
                        <li><strong>ضعيف:</strong> 8-10 أحرف بتنوع محدود</li>
                        <li><strong>متوسط:</strong> 11-14 حرف مع بعض التعقيد</li>
                        <li><strong>قوي:</strong> 15+ حرف مع تنوع جيد</li>
                        <li><strong>قوي جداً:</strong> 20+ حرف مع تعقيد عالي</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>نصائح لكلمة مرور قوية:</h5>
                    <div class="code-example">
                    ✓ استخدم 16+ حرف على الأقل
                    ✓ امزج الأحرف الكبيرة والصغيرة
                    ✓ أضف أرقام ورموز خاصة (!@#$%^&*)
                    ✓ تجنب المعلومات الشخصية
                    ✓ استخدم عبارات مفيدة مع تعديلات
                    </div>
                </div>
            `
        },
        entropyCalculator: {
            title: "حاسبة إنتروبيا كلمة المرور",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هي الإنتروبيا؟</h4>
                    <p>إنتروبيا كلمة المرور هي مقياس رياضي يحدد مقدار العشوائية والتعقيد في كلمة المرور، وتُقاس بالبت (bits).</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يتم الحساب؟</h4>
                    <ul>
                        <li>تحديد حجم مجموعة الأحرف المستخدمة</li>
                        <li>حساب اللوغاريتم الأساسي 2 لحجم المجموعة</li>
                        <li>ضرب النتيجة في طول كلمة المرور</li>
                        <li>الصيغة: الإنتروبيا = log₂(حجم المجموعة) × الطول</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مستويات الأمان</h4>
                    <ul>
                        <li><strong>أقل من 40 بت:</strong> ضعيف جداً - يمكن كسره بسهولة</li>
                        <li><strong>40-60 بت:</strong> ضعيف - مقاوم للهجمات البسيطة</li>
                        <li><strong>60-80 بت:</strong> متوسط - حماية معقولة</li>
                        <li><strong>80-100 بت:</strong> قوي - حماية جيدة</li>
                        <li><strong>أكثر من 100 بت:</strong> قوي جداً - حماية ممتازة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أمثلة على الحساب:</h5>
                    <div class="code-example">
                    كلمة مرور: "abc123" (6 أحرف)
                    حجم المجموعة: 36 (26 حرف + 10 أرقام)
                    الإنتروبيا: log₂(36) × 6 ≈ 31 بت (ضعيف)
                    
                    كلمة مرور: "MyP@ssw0rd!2023" (14 حرف)
                    حجم المجموعة: 94 (جميع الأحرف والرموز)
                    الإنتروبيا: log₂(94) × 14 ≈ 91 بت (قوي)
                    </div>
                </div>
            `
        },
        passwordGenerator: {
            title: "مولد كلمات المرور",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.2 3.2 1-1.73-4.2-2.47V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو مولد كلمات المرور؟</h4>
                    <p>أداة متقدمة تنشئ كلمات مرور قوية وعشوائية باستخدام خوارزميات تشفير آمنة لضمان أقصى درجات الحماية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>المميزات الرئيسية</h4>
                    <ul>
                        <li>توليد عشوائي حقيقي باستخدام Crypto API</li>
                        <li>تحكم كامل في طول كلمة المرور (8-64 حرف)</li>
                        <li>خيارات مرنة للأحرف والرموز</li>
                        <li>ضمان عدم تكرار الأنماط</li>
                        <li>تقييم فوري لقوة كلمة المرور المولدة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>أنواع الأحرف المستخدمة</h4>
                    <ul>
                        <li><strong>أحرف صغيرة:</strong> a-z (26 حرف)</li>
                        <li><strong>أحرف كبيرة:</strong> A-Z (26 حرف)</li>
                        <li><strong>أرقام:</strong> 0-9 (10 أرقام)</li>
                        <li><strong>رموز خاصة:</strong> !@#$%^&*()_+-=[]{}|;:,.<>? (32 رمز)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أفضل الممارسات:</h5>
                    <div class="code-example">
                    ✓ استخدم طول 16+ حرف للحسابات المهمة
                    ✓ فعّل جميع أنواع الأحرف
                    ✓ استخدم كلمة مرور مختلفة لكل حساب
                    ✓ احفظ كلمات المرور في مدير كلمات مرور آمن
                    ✓ غيّر كلمات المرور دورياً
                    </div>
                </div>
            `
        },
        leakChecker: {
            title: "فاحص تسريب كلمة المرور",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص التسريب؟</h4>
                    <p>أداة تتحقق من وجود كلمة المرور في قواعد بيانات التسريبات المعروفة والمتاحة للعامة، مما يساعد في تحديد ما إذا كانت كلمة المرور معرضة للخطر.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف تعمل؟</h4>
                    <ul>
                        <li>تشفير كلمة المرور باستخدام SHA-1</li>
                        <li>إرسال أول 5 أحرف من الهاش للخدمة</li>
                        <li>مقارنة الهاش الكامل محلياً</li>
                        <li>عدم إرسال كلمة المرور الفعلية أبداً</li>
                        <li>الحفاظ على الخصوصية التامة</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>مصادر البيانات</h4>
                    <ul>
                        <li><strong>Have I Been Pwned:</strong> قاعدة بيانات شاملة للتسريبات</li>
                        <li><strong>تسريبات الشركات:</strong> Facebook, Yahoo, LinkedIn</li>
                        <li><strong>قوائم كلمات المرور الشائعة:</strong> RockYou, SecLists</li>
                        <li><strong>هجمات القواميس:</strong> كلمات مرور ضعيفة معروفة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>ماذا تفعل إذا تم العثور على تسريب؟</h5>
                    <div class="code-example">
                    🚨 غيّر كلمة المرور فوراً
                    🔐 استخدم كلمة مرور قوية وفريدة
                    🔄 فعّل المصادقة الثنائية
                    📧 تحقق من الحسابات المرتبطة
                    🔍 راقب النشاط المشبوه
                    </div>
                </div>
            `
        },
        fileHashChecker: {
            title: "فاحص هاش الملفات",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو فاحص هاش الملفات؟</h4>
                    <p>أداة متقدمة للتحقق من سلامة وأصالة الملفات عبر حساب وتحليل قيم الهاش الرقمية للملفات.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل؟</h4>
                    <ul>
                        <li>قراءة محتوى الملف بأمان</li>
                        <li>حساب الهاش باستخدام خوارزميات متنوعة</li>
                        <li>مقارنة النتائج مع القيم المرجعية</li>
                        <li>اكتشاف أي تغييرات أو تلاعب</li>
                        <li>التحقق من سلامة التحميلات</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>حالات الاستخدام</h4>
                    <ul>
                        <li><strong>التحقق من التحميلات:</strong> تأكيد سلامة الملفات المحملة</li>
                        <li><strong>اكتشاف التلاعب:</strong> تحديد التعديلات غير المصرح بها</li>
                        <li><strong>النسخ الاحتياطية:</strong> التحقق من سلامة النسخ</li>
                        <li><strong>التوزيع الآمن:</strong> ضمان الأصالة عبر الشبكة</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>أمثلة عملية:</h5>
                    <div class="code-example">
                    ✓ تحقق من ملفات النظام
                    ✓ فحص التحديثات البرمجية
                    ✓ التحقق من سلامة المستندات
                    ✓ مراقبة ملفات التكوين
                    </div>
                </div>
            `
        },
        base64: {
            title: "مشفر/فك تشفير Base64",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو Base64؟</h4>
                    <p>Base64 هو نظام ترميز يحول البيانات الثنائية إلى نص ASCII آمن للنقل عبر البروتوكولات النصية.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل الترميز؟</h4>
                    <ul>
                        <li>تقسيم البيانات إلى مجموعات 3 بايت</li>
                        <li>تحويل كل مجموعة إلى 4 أحرف Base64</li>
                        <li>استخدام 64 حرفاً: A-Z, a-z, 0-9, +, /</li>
                        <li>إضافة حشو (=) عند الحاجة</li>
                        <li>الحصول على نص آمن للنقل</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>الاستخدامات الشائعة</h4>
                    <ul>
                        <li><strong>البريد الإلكتروني:</strong> إرفاق الملفات في MIME</li>
                        <li><strong>URLs:</strong> ترميز البيانات في الروابط</li>
                        <li><strong>JSON/XML:</strong> تضمين البيانات الثنائية</li>
                        <li><strong>التخزين:</strong> حفظ البيانات في قواعد البيانات النصية</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>مثال على الترميز:</h5>
                    <div class="code-example">
                    النص: "سايبر جارد"
                    Base64: "2LPYp9mK2KjYsSDYrNin2LHYrw=="
                    
                    النص: "CyberGuard"
                    Base64: "Q3liZXJHdWFyZA=="
                    </div>
                </div>
            `
        },
        ipGeolocation: {
            title: "تحديد موقع IP",
            icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            content: `
                <div class="explanation-section">
                    <h4>ما هو تحديد موقع IP؟</h4>
                    <p>تقنية لتحديد الموقع الجغرافي التقريبي لعنوان IP من خلال قواعد بيانات الشبكات والمواقع.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>كيف يعمل؟</h4>
                    <ul>
                        <li>البحث في قواعد بيانات WHOIS</li>
                        <li>تحليل تخصيصات مقدمي الخدمة</li>
                        <li>مطابقة النطاقات الجغرافية</li>
                        <li>تجميع البيانات من مصادر متعددة</li>
                        <li>تقدير الموقع التقريبي</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>المعلومات المتاحة</h4>
                    <ul>
                        <li><strong>البلد:</strong> الدولة التي ينتمي إليها IP</li>
                        <li><strong>المدينة:</strong> المنطقة التقريبية</li>
                        <li><strong>مقدم الخدمة:</strong> الشركة المشغلة</li>
                        <li><strong>المنطقة الزمنية:</strong> التوقيت المحلي</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>تطبيقات عملية:</h5>
                    <div class="code-example">
                    🔍 تحليل زوار المواقع
                    🛡️ اكتشاف الأنشطة المشبوهة
                    📍 تخصيص المحتوى حسب الموقع
                    ⚖️ الامتثال للقوانين المحلية
                    </div>
                </div>
            `
        }
        // يمكن إضافة باقي الأدوات هنا...
    },
    en: {
        passwordStrength: {
            title: "Password Strength Analyzer",
            icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
            content: `
                <div class="explanation-section">
                    <h4>What is this tool?</h4>
                    <p>The Password Strength Analyzer is an advanced tool that performs comprehensive analysis of passwords to determine their strength and security level against cyber attacks.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Analyzes password length and complexity</li>
                        <li>Checks for uppercase and lowercase usage</li>
                        <li>Verifies presence of numbers and special characters</li>
                        <li>Evaluates resistance against dictionary attacks</li>
                        <li>Calculates time required to crack the password</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Rating Criteria</h4>
                    <ul>
                        <li><strong>Very Weak:</strong> Less than 8 characters or simple patterns</li>
                        <li><strong>Weak:</strong> 8-10 characters with limited variety</li>
                        <li><strong>Medium:</strong> 11-14 characters with some complexity</li>
                        <li><strong>Strong:</strong> 15+ characters with good variety</li>
                        <li><strong>Very Strong:</strong> 20+ characters with high complexity</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Tips for strong passwords:</h5>
                    <div class="code-example">
                    ✓ Use at least 16+ characters
                    ✓ Mix uppercase and lowercase letters
                    ✓ Add numbers and special symbols (!@#$%^&*)
                    ✓ Avoid personal information
                    ✓ Use meaningful phrases with modifications
                    </div>
                </div>
            `
        },
        entropyCalculator: {
            title: "Password Entropy Calculator",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is entropy?</h4>
                    <p>Password entropy is a mathematical measure that determines the amount of randomness and complexity in a password, and is measured in bits.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How is it calculated?</h4>
                    <ul>
                        <li>Determining the size of the character set used</li>
                        <li>Calculating the base 2 logarithm of the set size</li>
                        <li>Multiplying the result by the password length</li>
                        <li>Formula: entropy = log₂(set size) × length</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Security Levels</h4>
                    <ul>
                        <li><strong>Less than 40 bits:</strong> Very Weak - easily breakable</li>
                        <li><strong>40-60 bits:</strong> Weak - resistant to simple attacks</li>
                        <li><strong>60-80 bits:</strong> Medium - reasonable protection</li>
                        <li><strong>80-100 bits:</strong> Strong - good protection</li>
                        <li><strong>More than 100 bits:</strong> Very Strong - excellent protection</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Examples of calculations:</h5>
                    <div class="code-example">
                    Password: "abc123" (6 characters)
                    Character set size: 36 (26 letters + 10 digits)
                    Entropy: log₂(36) × 6 ≈ 31 bits (Weak)
                    
                    Password: "MyP@ssw0rd!2023" (14 characters)
                    Character set size: 94 (all letters and symbols)
                    Entropy: log₂(94) × 14 ≈ 91 bits (Strong)
                    </div>
                </div>
            `
        },
        passwordGenerator: {
            title: "Password Generator",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.2 3.2 1-1.73-4.2-2.47V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is a password generator?</h4>
                    <p>An advanced tool that creates strong, random passwords using secure encryption algorithms to ensure maximum protection.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>Main Features</h4>
                    <ul>
                        <li>True random generation using Crypto API</li>
                        <li>Full control over password length (8-64 characters)</li>
                        <li>Flexible options for characters and symbols</li>
                        <li>Ensures no pattern repetition</li>
                        <li>Instant evaluation of generated password strength</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Types of characters used</h4>
                    <ul>
                        <li><strong>Lowercase letters:</strong> a-z (26 letters)</li>
                        <li><strong>Uppercase letters:</strong> A-Z (26 letters)</li>
                        <li><strong>Digits:</strong> 0-9 (10 digits)</li>
                        <li><strong>Special symbols:</strong> !@#$%^&*()_+-=[]{}|;:,.<>? (32 symbols)</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Best Practices:</h5>
                    <div class="code-example">
                    ✓ Use a length of 16+ characters for important accounts
                    ✓ Enable all types of characters
                    ✓ Use a different password for each account
                    ✓ Store passwords in a secure password manager
                    ✓ Change passwords regularly
                    </div>
                </div>
            `
        },
        leakChecker: {
            title: "Password Leak Checker",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is a leak checker?</h4>
                    <p>A tool that checks if a password has appeared in known and publicly available breach databases, helping to determine if the password is compromised.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Hashes the password using SHA-1</li>
                        <li>Sends the first 5 characters of the hash to the service</li>
                        <li>Compares the full hash locally</li>
                        <li>Never sends the actual password</li>
                        <li>Maintains complete privacy</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Data Sources</h4>
                    <ul>
                        <li><strong>Have I Been Pwned:</strong> Comprehensive breach database</li>
                        <li><strong>Company Breaches:</strong> Facebook, Yahoo, LinkedIn</li>
                        <li><strong>Common Password Lists:</strong> RockYou, SecLists</li>
                        <li><strong>Dictionary Attacks:</strong> Known weak passwords</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>What to do if a leak is found?</h5>
                    <div class="code-example">
                    🚨 Change your password immediately
                    🔐 Use a strong, unique password
                    🔄 Enable two-factor authentication
                    📧 Check linked accounts
                    🔍 Monitor for suspicious activity
                    </div>
                </div>
            `
        },
        fileHashChecker: {
            title: "File Hash Checker",
            icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
            content: `
                <div class="explanation-section">
                    <h4>What is a File Hash Checker?</h4>
                    <p>An advanced tool for verifying file integrity and authenticity by calculating and analyzing digital hash values of files.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Safely reads file content</li>
                        <li>Calculates hash using various algorithms</li>
                        <li>Compares results with reference values</li>
                        <li>Detects any changes or tampering</li>
                        <li>Verifies download integrity</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Use Cases</h4>
                    <ul>
                        <li><strong>Download Verification:</strong> Confirm integrity of downloaded files</li>
                        <li><strong>Tampering Detection:</strong> Identify unauthorized modifications</li>
                        <li><strong>Backup Verification:</strong> Check backup integrity</li>
                        <li><strong>Secure Distribution:</strong> Ensure authenticity across networks</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Practical Examples:</h5>
                    <div class="code-example">
                    ✓ Verify system files
                    ✓ Check software updates
                    ✓ Validate document integrity
                    ✓ Monitor configuration files
                    </div>
                </div>
            `
        },
        base64: {
            title: "Base64 Encoder/Decoder",
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z",
            content: `
                <div class="explanation-section">
                    <h4>What is Base64?</h4>
                    <p>Base64 is an encoding system that converts binary data into safe ASCII text for transmission over text-based protocols.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does encoding work?</h4>
                    <ul>
                        <li>Divides data into groups of 3 bytes</li>
                        <li>Converts each group into 4 Base64 characters</li>
                        <li>Uses 64 characters: A-Z, a-z, 0-9, +, /</li>
                        <li>Adds padding (=) when needed</li>
                        <li>Results in safe text for transmission</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Common Uses</h4>
                    <ul>
                        <li><strong>Email:</strong> Attaching files in MIME</li>
                        <li><strong>URLs:</strong> Encoding data in links</li>
                        <li><strong>JSON/XML:</strong> Embedding binary data</li>
                        <li><strong>Storage:</strong> Saving data in text databases</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Encoding Example:</h5>
                    <div class="code-example">
                    Text: "CyberGuard"
                    Base64: "Q3liZXJHdWFyZA=="
                    
                    Text: "Hello World"
                    Base64: "SGVsbG8gV29ybGQ="
                    </div>
                </div>
            `
        },
        ipGeolocation: {
            title: "IP Geolocation",
            icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            content: `
                <div class="explanation-section">
                    <h4>What is IP Geolocation?</h4>
                    <p>A technique for determining the approximate geographic location of an IP address through network and location databases.</p>
                </div>
                
                <div class="explanation-section">
                    <h4>How does it work?</h4>
                    <ul>
                        <li>Searches WHOIS databases</li>
                        <li>Analyzes ISP allocations</li>
                        <li>Matches geographic ranges</li>
                        <li>Aggregates data from multiple sources</li>
                        <li>Estimates approximate location</li>
                    </ul>
                </div>
                
                <div class="explanation-section">
                    <h4>Available Information</h4>
                    <ul>
                        <li><strong>Country:</strong> The nation the IP belongs to</li>
                        <li><strong>City:</strong> Approximate regional area</li>
                        <li><strong>ISP:</strong> Internet service provider</li>
                        <li><strong>Timezone:</strong> Local time zone</li>
                    </ul>
                </div>
                
                <div class="usage-examples">
                    <h5>Practical Applications:</h5>
                    <div class="code-example">
                    🔍 Analyze website visitors
                    🛡️ Detect suspicious activities
                    📍 Customize content by location
                    ⚖️ Comply with local regulations
                    </div>
                </div>
            `
        }
        // Add more tools here...
    }
};

// Tool Explanation Modal Functions
function explainTool(toolId) {
    try {
        const explanation = toolExplanations[currentLang][toolId];
        
        if (!explanation) {
            console.warn(`No explanation found for tool: ${toolId}`);
            return;
        }
        
        // Update modal content
        const modal = document.getElementById('toolExplanationModal');
        const titleText = document.getElementById('explanationTitleText');
        const iconPath = document.querySelector('#explanationIcon path');
        const body = document.getElementById('explanationBody');
        
        if (!modal || !titleText || !iconPath || !body) {
            console.error('Modal elements not found');
            return;
        }
        
        titleText.textContent = explanation.title;
        iconPath.setAttribute('d', explanation.icon);
        body.innerHTML = explanation.content;
        
        // Show modal with proper animation
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Add event listeners for closing
        const closeHandler = function(e) {
            if (e.target === modal) {
                closeToolExplanation();
            }
        };
        
        const keyHandler = function(e) {
            if (e.key === 'Escape') {
                closeToolExplanation();
                document.removeEventListener('keydown', keyHandler);
            }
        };
        
        modal.addEventListener('click', closeHandler);
        document.addEventListener('keydown', keyHandler);
        
        // Store handlers for cleanup
        modal._closeHandler = closeHandler;
        modal._keyHandler = keyHandler;
        
    } catch (e) {
        console.error('Error showing tool explanation:', e);
    }
}

function closeToolExplanation() {
    try {
        const modal = document.getElementById('toolExplanationModal');
        
        // Remove show class first for animation
        modal.classList.remove('show');
        
        // Hide modal after animation
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        
        // Clean up event listeners
        if (modal._closeHandler) {
            modal.removeEventListener('click', modal._closeHandler);
            modal._closeHandler = null;
        }
        
        if (modal._keyHandler) {
            document.removeEventListener('keydown', modal._keyHandler);
            modal._keyHandler = null;
        }
        
    } catch (e) {
        console.error('Error closing tool explanation:', e);
    }
}

// Get current language helper function
function getCurrentLanguage() {
    return currentLang;
}

// Platform Info Modal Functions
function showPlatformInfo() {
    try {
        const modal = document.getElementById('platformInfoModal');
        modal.classList.add('show');
    } catch (e) {
        console.error('Error showing platform info:', e);
    }
}

function closePlatformInfo() {
    try {
        const modal = document.getElementById('platformInfoModal');
        modal.classList.remove('show');
    } catch (e) {
        console.error('Error closing platform info:', e);
    }
}

// Update modal content language
function updateModalLanguage() {
    try {
        // Update platform info modal
        const platformModal = document.getElementById('platformInfoModal');
        if (platformModal) {
            platformModal.querySelectorAll('[data-en][data-ar]').forEach(elem => {
                elem.textContent = elem.getAttribute(`data-${currentLang}`);
                elem.innerHTML = elem.getAttribute(`data-${currentLang}`);
            });
        }
    } catch (e) {
        console.error('Error updating modal language:', e);
    }
}

// Enhanced Language Switching with Modal Support

// Password Strength Analyzer
function analyzePassword() {
    try {
        const password = document.getElementById('password').value;
        const resultBox = document.getElementById('passwordResult');
        const strengthBars = document.querySelectorAll('#strengthIndicator .strength-bar');
        toggleSpinner('passwordSpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].passwordEmpty, 50, () => {
                toggleSpinner('passwordSpinner', false);
            });
            return;
        }

        saveInputData('password', password);

        setTimeout(() => {
            let strength = 0;
            if (password.length > 0) strength++;
            if (password.length > 8) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;

            strengthBars.forEach((bar, index) => {
                bar.classList.toggle('active', index < strength);
            });

            typeText(resultBox, resultMessages[currentLang].passwordStrength[strength], 50, () => {
                toggleSpinner('passwordSpinner', false);
            });
        }, 500);
    } catch (e) {
        console.error('Error analyzing password:', e);
        typeText(document.getElementById('passwordResult'), 'Error analyzing password.', 50, () => {
            toggleSpinner('passwordSpinner', false);
        });
    }
}

// Password Entropy Calculator
function calculateEntropy() {
    try {
        const password = document.getElementById('entropyPassword').value;
        const resultBox = document.getElementById('entropyResult');
        toggleSpinner('entropySpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].entropyEmpty, 50, () => {
                toggleSpinner('entropySpinner', false);
            });
            return;
        }

        saveInputData('entropyPassword', password);

        setTimeout(() => {
            let charset = 0;
            if (/[a-z]/.test(password)) charset += 26;
            if (/[A-Z]/.test(password)) charset += 26;
            if (/[0-9]/.test(password)) charset += 10;
            if (/[^a-zA-Z0-9]/.test(password)) charset += 32;

            if (charset === 0) {
                typeText(resultBox, resultMessages[currentLang].entropyEmpty, 50, () => {
                    toggleSpinner('entropySpinner', false);
                });
                return;
            }

            const entropy = password.length * Math.log2(charset);
            typeText(resultBox, resultMessages[currentLang].entropyResult(entropy), 50, () => {
                toggleSpinner('entropySpinner', false);
            });
        }, 500);
    } catch (e) {
        console.error('Error calculating entropy:', e);
        typeText(document.getElementById('entropyResult'), 'Error calculating entropy.', 50, () => {
            toggleSpinner('entropySpinner', false);
        });
    }
}

// Password Generator
function generateSecurePassword() {
    try {
        const length = parseInt(document.getElementById('passwordLength').value);
        const includeSymbols = document.getElementById('includeSymbols').checked;
        const resultBox = document.getElementById('generatedPasswordResult');
        toggleSpinner('passwordGenSpinner', true);

        if (isNaN(length) || length < 8 || length > 64) {
            typeText(resultBox, resultMessages[currentLang].passwordLengthInvalid, 50, () => {
                toggleSpinner('passwordGenSpinner', false);
            });
            return;
        }

        setTimeout(() => {
            const lowercase = 'abcdefghijklmnopqrstuvwxyz';
            const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            
            let chars = lowercase + uppercase + numbers;
            if (includeSymbols) chars += symbols;

            let password = '';
            for (let i = 0; i < length; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            saveInputData('generatedPasswordResult', password);

            typeText(resultBox, password, 50, () => {
                toggleSpinner('passwordGenSpinner', false);
            });
        }, 500);
    } catch (e) {
        console.error('Error generating password:', e);
        typeText(document.getElementById('generatedPasswordResult'), 'Error generating password.', 50, () => {
            toggleSpinner('passwordGenSpinner', false);
        });
    }
}

// Password Leak Checker
function checkPasswordLeak() {
    try {
        const password = document.getElementById('leakPassword').value;
        const resultBox = document.getElementById('leakResult');
        toggleSpinner('leakSpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].leakEmpty, 50, () => {
                toggleSpinner('leakSpinner', false);
            });
            return;
        }

        saveInputData('leakPassword', password);

        setTimeout(() => {
            const weakPasswords = ['password', '123456', 'qwerty'];
            const isLeaked = weakPasswords.includes(password.toLowerCase());
            typeText(resultBox, isLeaked 
                ? resultMessages[currentLang].leakFound 
                : resultMessages[currentLang].leakNotFound, 50, () => {
                toggleSpinner('leakSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error checking password leak:', e);
        typeText(document.getElementById('leakResult'), 'Error checking password leak.', 50, () => {
            toggleSpinner('leakSpinner', false);
        });
    }
}

// Hash Generator
async function generateHash() {
    try {
        const input = document.getElementById('hashInput').value;
        const hashType = document.getElementById('hashType').value;
        const resultBox = document.getElementById('hashResult');
        toggleSpinner('hashSpinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].hashEmpty, 50, () => {
                toggleSpinner('hashSpinner', false);
            });
            return;
        }

        saveInputData('hashInput', input);

        let hash;
        if (hashType === 'md5') {
            hash = CryptoJS.MD5(input).toString();
        } else if (hashType === 'sha1') {
            hash = CryptoJS.SHA1(input).toString();
        } else if (hashType === 'sha256') {
            hash = CryptoJS.SHA256(input).toString();
        } else {
            typeText(resultBox, resultMessages[currentLang].hashInvalidType, 50, () => {
                toggleSpinner('hashSpinner', false);
            });
            return;
        }

        typeText(resultBox, resultMessages[currentLang].hashResult(hashType, hash), 50, () => {
            toggleSpinner('hashSpinner', false);
        });
    } catch (e) {
        console.error('Error generating hash:', e);
        typeText(document.getElementById('hashResult'), 'Error generating hash.', 50, () => {
            toggleSpinner('hashSpinner', false);
        });
    }
}

// File Hash Checker
async function checkFileHash() {
    try {
        const fileInput = document.getElementById('fileInput').files[0];
        const hashType = document.getElementById('fileHashType').value;
        const resultBox = document.getElementById('fileHashResult');
        toggleSpinner('fileHashSpinner', true);

        if (!fileInput) {
            typeText(resultBox, resultMessages[currentLang].fileEmpty, 50, () => {
                toggleSpinner('fileHashSpinner', false);
            });
            return;
        }

        if (fileInput.size > 10 * 1024 * 1024) {
            typeText(resultBox, resultMessages[currentLang].fileTooLarge, 50, () => {
                toggleSpinner('fileHashSpinner', false);
            });
            return;
        }

        const reader = new FileReader();
        reader.onload = async function(e) {
            try {
                const content = new TextEncoder().encode(e.target.result);
                let hash;
                if (hashType === 'md5') {
                    hash = CryptoJS.MD5(CryptoJS.lib.WordArray.create(content)).toString();
                } else if (hashType === 'sha1') {
                    hash = CryptoJS.SHA1(CryptoJS.lib.WordArray.create(content)).toString();
                } else if (hashType === 'sha256') {
                    hash = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(content)).toString();
                } else {
                    typeText(resultBox, resultMessages[currentLang].hashInvalidType, 50, () => {
                        toggleSpinner('fileHashSpinner', false);
                    });
                    return;
                }
                typeText(resultBox, resultMessages[currentLang].fileHashResult(hashType, hash), 50, () => {
                    toggleSpinner('fileHashSpinner', false);
                });
            } catch (e) {
                console.error('Error computing file hash:', e);
                typeText(resultBox, 'Error computing file hash.', 50, () => {
                    toggleSpinner('fileHashSpinner', false);
                });
            }
        };
        reader.onerror = () => {
            typeText(resultBox, resultMessages[currentLang].fileReadError, 50, () => {
                toggleSpinner('fileHashSpinner', false);
            });
        };
        reader.readAsArrayBuffer(fileInput);
    } catch (e) {
        console.error('Error in checkFileHash:', e);
        typeText(document.getElementById('fileHashResult'), 'Error processing file.', 50, () => {
            toggleSpinner('fileHashSpinner', false);
        });
    }
}

// Base64 Encoder/Decoder
function encodeBase64() {
    try {
        const input = document.getElementById('base64Input').value;
        const resultBox = document.getElementById('base64Result');
        toggleSpinner('base64Spinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].base64Empty, 50, () => {
                toggleSpinner('base64Spinner', false);
            });
            return;
        }

        saveInputData('base64Input', input);

        setTimeout(() => {
            try {
                const encoded = btoa(input);
                typeText(resultBox, encoded, 50, () => {
                    toggleSpinner('base64Spinner', false);
                    resultBox.dataset.lastAction = 'encode';
                });
            } catch (e) {
                console.error('Error encoding Base64:', e);
                typeText(resultBox, resultMessages[currentLang].base64InvalidEncode, 50, () => {
                    toggleSpinner('base64Spinner', false);
                });
            }
        }, 500);
    } catch (e) {
        console.error('Error in encodeBase64:', e);
        typeText(document.getElementById('base64Result'), 'Error encoding.', 50, () => {
            toggleSpinner('base64Spinner', false);
        });
    }
}

function decodeBase64() {
    try {
        const input = document.getElementById('base64Input').value;
        const resultBox = document.getElementById('base64Result');
        toggleSpinner('base64Spinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].base64Empty, 50, () => {
                toggleSpinner('base64Spinner', false);
            });
            return;
        }

        saveInputData('base64Input', input);

        setTimeout(() => {
            try {
                const decoded = atob(input);
                typeText(resultBox, decoded, 50, () => {
                    toggleSpinner('base64Spinner', false);
                    resultBox.dataset.lastAction = 'decode';
                });
            } catch (e) {
                console.error('Error decoding Base64:', e);
                typeText(resultBox, resultMessages[currentLang].base64InvalidDecode, 50, () => {
                    toggleSpinner('base64Spinner', false);
                });
            }
        }, 500);
    } catch (e) {
        console.error('Error in decodeBase64:', e);
        typeText(document.getElementById('base64Result'), 'Error decoding.', 50, () => {
            toggleSpinner('base64Spinner', false);
        });
    }
}

// IP Geolocation
function getMyIP() {
    try {
        const resultBox = document.getElementById('ipResult');
        toggleSpinner('ipSpinner', true);
        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].myIPResult, 50, () => {
                toggleSpinner('ipSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error getting IP:', e);
        typeText(document.getElementById('ipResult'), 'Error getting IP.', 50, () => {
            toggleSpinner('ipSpinner', false);
        });
    }
}

function geolocateIP() {
    try {
        const ip = document.getElementById('ipAddress').value;
        const resultBox = document.getElementById('ipResult');
        toggleSpinner('ipSpinner', true);

        if (!ip) {
            typeText(resultBox, resultMessages[currentLang].ipEmpty, 50, () => {
                toggleSpinner('ipSpinner', false);
            });
            return;
        }

        saveInputData('ipAddress', ip);

        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].ipResult(ip), 50, () => {
                toggleSpinner('ipSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error geolocating IP:', e);
        typeText(document.getElementById('ipResult'), 'Error geolocating IP.', 50, () => {
            toggleSpinner('ipSpinner', false);
        });
    }
}

// Port Scanner Simulator
function simulatePortScan() {
    try {
        const ip = document.getElementById('targetIP').value;
        const range = document.getElementById('portRange').value;
        const resultBox = document.getElementById('portScanResult');
        toggleSpinner('portScanSpinner', true);

        if (!ip || !range) {
            typeText(resultBox, resultMessages[currentLang].portScanEmpty, 50, () => {
                toggleSpinner('portScanSpinner', false);
            });
            return;
        }

        saveInputData('targetIP', ip);
        saveInputData('portRange', range);

        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].portScanResult(ip, range), 50, () => {
                toggleSpinner('portScanSpinner', false);
            });
        }, 2000);
    } catch (e) {
        console.error('Error simulating port scan:', e);
        typeText(document.getElementById('portScanResult'), 'Error simulating port scan.', 50, () => {
            toggleSpinner('portScanSpinner', false);
        });
    }
}

// URL Security Checker
function checkURLSecurity() {
    try {
        const url = document.getElementById('urlInput').value;
        const resultBox = document.getElementById('urlResult');
        toggleSpinner('urlSpinner', true);

        if (!url) {
            typeText(resultBox, resultMessages[currentLang].urlEmpty, 50, () => {
                toggleSpinner('urlSpinner', false);
            });
            return;
        }

        saveInputData('urlInput', url);

        setTimeout(() => {
            const maliciousPatterns = ['malware', 'phish', 'hack'];
            const isSuspicious = maliciousPatterns.some(pattern => url.toLowerCase().includes(pattern));
            typeText(resultBox, isSuspicious 
                ? resultMessages[currentLang].urlSuspicious(url) 
                : resultMessages[currentLang].urlSafe(url), 50, () => {
                toggleSpinner('urlSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error checking URL security:', e);
        typeText(document.getElementById('urlResult'), 'Error checking URL security.', 50, () => {
            toggleSpinner('urlSpinner', false);
        });
    }
}

// Text Encryption/Decryption
function encryptText() {
    try {
        const input = document.getElementById('cryptoInput').value;
        const key = document.getElementById('cryptoKey').value;
        const cryptoType = document.getElementById('cryptoType').value;
        const resultBox = document.getElementById('cryptoResult');
        toggleSpinner('cryptoSpinner', true);

        if (!input || !key) {
            typeText(resultBox, resultMessages[currentLang].cryptoEmpty, 50, () => {
                toggleSpinner('cryptoSpinner', false);
            });
            return;
        }

        saveInputData('cryptoInput', input);
        saveInputData('cryptoKey', key);

        setTimeout(() => {
            let encrypted;
            if (cryptoType === 'aes') {
                encrypted = CryptoJS.AES.encrypt(input, key).toString();
            } else if (cryptoType === 'tripledes') {
                encrypted = CryptoJS.TripleDES.encrypt(input, key).toString();
            } else {
                typeText(resultBox, resultMessages[currentLang].cryptoInvalidType, 50, () => {
                    toggleSpinner('cryptoSpinner', false);
                });
                return;
            }
            typeText(resultBox, resultMessages[currentLang].cryptoEncryptResult(cryptoType, encrypted), 50, () => {
                toggleSpinner('cryptoSpinner', false);
                resultBox.dataset.lastAction = 'encrypt';
            });
        }, 500);
    } catch (e) {
        console.error('Error encrypting text:', e);
        typeText(document.getElementById('cryptoResult'), 'Error encrypting text.', 50, () => {
            toggleSpinner('cryptoSpinner', false);
        });
    }
}

function decryptText() {
    try {
        const input = document.getElementById('cryptoInput').value;
        const key = document.getElementById('cryptoKey').value;
        const cryptoType = document.getElementById('cryptoType').value;
        const resultBox = document.getElementById('cryptoResult');
        toggleSpinner('cryptoSpinner', true);

        if (!input || !key) {
            typeText(resultBox, resultMessages[currentLang].cryptoEmpty, 50, () => {
                toggleSpinner('cryptoSpinner', false);
            });
            return;
        }

        saveInputData('cryptoInput', input);
        saveInputData('cryptoKey', key);

        setTimeout(() => {
            try {
                let decrypted;
                if (cryptoType === 'aes') {
                    decrypted = CryptoJS.AES.decrypt(input, key).toString(CryptoJS.enc.Utf8);
                } else if (cryptoType === 'tripledes') {
                    decrypted = CryptoJS.TripleDES.decrypt(input, key).toString(CryptoJS.enc.Utf8);
                } else {
                    typeText(resultBox, resultMessages[currentLang].cryptoInvalidType, 50, () => {
                        toggleSpinner('cryptoSpinner', false);
                    });
                    return;
                }
                if (!decrypted) {
                    typeText(resultBox, resultMessages[currentLang].cryptoInvalidDecrypt, 50, () => {
                        toggleSpinner('cryptoSpinner', false);
                    });
                    return;
                }
                typeText(resultBox, resultMessages[currentLang].cryptoDecryptResult(decrypted), 50, () => {
                    toggleSpinner('cryptoSpinner', false);
                    resultBox.dataset.lastAction = 'decrypt';
                });
            } catch (e) {
                console.error('Error decrypting text:', e);
                typeText(resultBox, resultMessages[currentLang].cryptoInvalidDecrypt, 50, () => {
                    toggleSpinner('cryptoSpinner', false);
                });
            }
        }, 500);
    } catch (e) {
        console.error('Error in decryptText:', e);
        typeText(document.getElementById('cryptoResult'), 'Error decrypting text.', 50, () => {
            toggleSpinner('cryptoSpinner', false);
        });
    }
}

// Dark Web Scanner
function scanDarkWeb() {
    try {
        const input = document.getElementById('darkWebInput').value;
        const resultBox = document.getElementById('darkWebResult');
        toggleSpinner('darkWebSpinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].darkWebEmpty, 50, () => {
                toggleSpinner('darkWebSpinner', false);
            });
            return;
        }

        saveInputData('darkWebInput', input);

        setTimeout(() => {
            typeText(resultBox, resultMessages[currentLang].darkWebResult(input), 50, () => {
                toggleSpinner('darkWebSpinner', false);
            });
        }, 2000);
    } catch (e) {
        console.error('Error scanning dark web:', e);
        typeText(document.getElementById('darkWebResult'), 'Error scanning dark web.', 50, () => {
            toggleSpinner('darkWebSpinner', false);
        });
    }
}

// Network Traffic Simulator
function simulateNetworkTraffic() {
    try {
        const resultBox = document.getElementById('trafficResult');
        toggleSpinner('trafficSpinner', true);

        setTimeout(() => {
            const packets = Math.floor(Math.random() * 1000);
            const speed = (packets * 0.1).toFixed(2);
            typeText(resultBox, resultMessages[currentLang].trafficResult(packets, speed), 50, () => {
                toggleSpinner('trafficSpinner', false);
            });
        }, 1500);
    } catch (e) {
        console.error('Error simulating network traffic:', e);
        typeText(document.getElementById('trafficResult'), 'Error simulating network traffic.', 50, () => {
            toggleSpinner('trafficSpinner', false);
        });
    }
}

// SQL Injection Tester
function testSQLInjection() {
    try {
        const query = document.getElementById('sqlInput').value;
        const resultBox = document.getElementById('sqlResult');
        toggleSpinner('sqlSpinner', true);

        if (!query) {
            typeText(resultBox, resultMessages[currentLang].sqlEmpty, 50, () => {
                toggleSpinner('sqlSpinner', false);
            });
            return;
        }

        saveInputData('sqlInput', query);

        setTimeout(() => {
            const sqlPatterns = [
                /[';]--/i,
                /union.*select/i,
                /or.*1=1/i,
                /drop.*table/i,
                /exec.*xp_cmdshell/i
            ];
            const isVulnerable = sqlPatterns.some(pattern => pattern.test(query));
            typeText(resultBox, isVulnerable 
                ? resultMessages[currentLang].sqlVulnerable(query) 
                : resultMessages[currentLang].sqlSafe(query), 50, () => {
                toggleSpinner('sqlSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error testing SQL injection:', e);
        typeText(document.getElementById('sqlResult'), 'Error testing SQL injection.', 50, () => {
            toggleSpinner('sqlSpinner', false);
        });
    }
}

// XSS Scanner
function scanXSS() {
    try {
        const input = document.getElementById('xssInput').value;
        const resultBox = document.getElementById('xssResult');
        toggleSpinner('xssSpinner', true);

        if (!input) {
            typeText(resultBox, resultMessages[currentLang].xssEmpty, 50, () => {
                toggleSpinner('xssSpinner', false);
            });
            return;
        }

        saveInputData('xssInput', input);

        setTimeout(() => {
            const xssPatterns = [
                /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i,
                /on\w+\s*=/i,
                /javascript:/i,
                /alert\s*\(/i,
                /eval\s*\(/i
            ];
            const isVulnerable = xssPatterns.some(pattern => pattern.test(input));
            typeText(resultBox, isVulnerable 
                ? resultMessages[currentLang].xssVulnerable(input) 
                : resultMessages[currentLang].xssSafe(input), 50, () => {
                toggleSpinner('xssSpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error scanning XSS:', e);
        typeText(document.getElementById('xssResult'), 'Error scanning XSS.', 50, () => {
            toggleSpinner('xssSpinner', false);
        });
    }
}

// Network Latency Tester
function testNetworkLatency() {
    try {
        const target = document.getElementById('latencyTarget').value;
        const resultBox = document.getElementById('latencyResult');
        toggleSpinner('latencySpinner', true);

        if (!target) {
            typeText(resultBox, resultMessages[currentLang].latencyEmpty, 50, () => {
                toggleSpinner('latencySpinner', false);
            });
            return;
        }

        saveInputData('latencyTarget', target);

        setTimeout(() => {
            const latency = (Math.random() * 200 + 50).toFixed(2);
            typeText(resultBox, resultMessages[currentLang].latencyResult(target, latency), 50, () => {
                toggleSpinner('latencySpinner', false);
            });
        }, 1500);
    } catch (e) {
        console.error('Error testing network latency:', e);
        typeText(document.getElementById('latencyResult'), 'Error testing network latency.', 50, () => {
            toggleSpinner('latencySpinner', false);
        });
    }
}

// Password Complexity Visualizer
function visualizeComplexity() {
    try {
        const password = document.getElementById('complexityPassword').value;
        const resultBox = document.getElementById('complexityResult');
        const visualizer = document.getElementById('complexityVisualizer');
        toggleSpinner('complexitySpinner', true);

        if (!password) {
            typeText(resultBox, resultMessages[currentLang].complexityEmpty, 50, () => {
                toggleSpinner('complexitySpinner', false);
            });
            return;
        }

        saveInputData('complexityPassword', password);

        setTimeout(() => {
            let score = 0;
            const details = [];
            if (password.length >= 8) {
                score += 30;
                details.push(currentLang === 'ar' ? 'الطول ≥ 8 أحرف (+30%)' : 'Length ≥ 8 characters (+30%)');
            }
            if (/[A-Z]/.test(password)) {
                score += 20;
                details.push(currentLang === 'ar' ? 'يحتوي على أحرف كبيرة (+20%)' : 'Contains uppercase letters (+20%)');
            }
            if (/[0-9]/.test(password)) {
                score += 20;
                details.push(currentLang === 'ar' ? 'يحتوي على أرقام (+20%)' : 'Contains numbers (+20%)');
            }
            if (/[^A-Za-z0-9]/.test(password)) {
                score += 20;
                details.push(currentLang === 'ar' ? 'يحتوي على رموز خاصة (+20%)' : 'Contains special characters (+20%)');
            }
            if (password.length >= 12) {
                score += 10;
                details.push(currentLang === 'ar' ? 'الطول ≥ 12 حرفًا (+10%)' : 'Length ≥ 12 characters (+10%)');
            }

            const bar = document.createElement('div');
            bar.className = 'complexity-bar';
            bar.style.width = `${score}%`;
            visualizer.innerHTML = '';
            visualizer.appendChild(bar);

            typeText(resultBox, resultMessages[currentLang].complexityResult(score, details.join('\n')), 50, () => {
                toggleSpinner('complexitySpinner', false);
            });
        }, 1000);
    } catch (e) {
        console.error('Error visualizing complexity:', e);
        typeText(document.getElementById('complexityResult'), 'Error visualizing complexity.', 50, () => {
            toggleSpinner('complexitySpinner', false);
        });
    }
}

// Define tools for refreshing results
const tools = [
    { id: 'passwordResult', func: analyzePassword },
    { id: 'entropyResult', func: calculateEntropy },
    { id: 'generatedPasswordResult', func: generateSecurePassword },
    { id: 'leakResult', func: checkPasswordLeak },
    { id: 'hashResult', func: generateHash },
    { id: 'fileHashResult', func: checkFileHash },
    { id: 'base64Result', func: () => {
        const lastAction = document.getElementById('base64Result').dataset.lastAction;
        if (lastAction === 'encode') encodeBase64();
        else if (lastAction === 'decode') decodeBase64();
    }},
    { id: 'ipResult', func: geolocateIP },
    { id: 'portScanResult', func: simulatePortScan },
    { id: 'urlResult', func: checkURLSecurity },
    { id: 'cryptoResult', func: () => {
        const lastAction = document.getElementById('cryptoResult').dataset.lastAction;
        if (lastAction === 'encrypt') encryptText();
        else if (lastAction === 'decrypt') decryptText();
    }},
    { id: 'darkWebResult', func: scanDarkWeb },
    { id: 'trafficResult', func: simulateNetworkTraffic },
    { id: 'sqlResult', func: testSQLInjection },
    { id: 'xssResult', func: scanXSS },
    { id: 'latencyResult', func: testNetworkLatency },
    { id: 'complexityResult', func: visualizeComplexity }
];

// Network Monitor Functions
function startNetworkMonitor() {
    try {
        if (monitorInterval) clearInterval(monitorInterval);
        
        monitorInterval = setInterval(() => {
            updateNetworkStatus();
        }, 2000);
        
        updateNetworkStatus();
    } catch (e) {
        console.error('Error starting network monitor:', e);
    }
}

function updateNetworkStatus() {
    try {
        const statusElement = document.getElementById('systemStatus');
        const threatElement = document.getElementById('threatLevel');
        const scanElement = document.getElementById('activeScanCount');
        const trafficElement = document.getElementById('networkTraffic');
        
        if (statusElement) {
            const statuses = ['Online', 'Secure', 'Protected'];
            statusElement.textContent = statuses[Math.floor(Math.random() * statuses.length)];
        }
        
        if (threatElement) {
            const threats = ['Low', 'Medium', 'High'];
            const colors = ['#00ff88', '#ffaa00', '#ff4500'];
            const randomIndex = Math.floor(Math.random() * threats.length);
            threatElement.textContent = threats[randomIndex];
            threatElement.style.color = colors[randomIndex];
        }
        
        if (scanElement) {
            scanElement.textContent = activeScans.toString();
        }
        
        if (trafficElement) {
            networkTraffic = Math.floor(Math.random() * 1000);
            trafficElement.textContent = `${networkTraffic} KB/s`;
        }
    } catch (e) {
        console.error('Error updating network status:', e);
    }
}

function toggleNetworkMonitor() {
    try {
        const monitor = document.getElementById('networkMonitor');
        const content = monitor.querySelector('.monitor-content');
        const monitorText = monitor.querySelector('.monitor-text');
        
        if (monitor.classList.contains('compact')) {
            // إظهار الوضع الكامل
            monitor.classList.remove('compact');
            content.style.display = 'block';
            if (monitorText) {
                monitorText.textContent = currentLang === 'ar' ? 'إخفاء المراقب' : 'Hide Monitor';
            }
        } else {
            // إخفاء إلى الوضع المضغوط
            monitor.classList.add('compact');
            content.style.display = 'none';
            if (monitorText) {
                monitorText.textContent = currentLang === 'ar' ? 'المراقب' : 'Monitor';
            }
        }
    } catch (e) {
        console.error('Error toggling network monitor:', e);
    }
}

// Initialize Network Monitor
function initializeNetworkMonitor() {
    try {
        const monitor = document.getElementById('networkMonitor');
        const monitorText = monitor.querySelector('.monitor-text');
        
        // بدء في الوضع المضغوط
        monitor.classList.add('compact');
        monitor.querySelector('.monitor-content').style.display = 'none';
        
        if (monitorText) {
            monitorText.textContent = currentLang === 'ar' ? 'المراقب' : 'Monitor';
        }
        
        // بدء مراقبة الشبكة
        startNetworkMonitor();
    } catch (e) {
        console.error('Error initializing network monitor:', e);
    }
}

// Spinner Control Functions
function toggleSpinner(spinnerId, show) {
    try {
        const spinner = document.getElementById(spinnerId);
        if (spinner) {
            spinner.style.display = show ? 'block' : 'none';
        }
    } catch (e) {
        console.error('Error toggling spinner:', e);
    }
}