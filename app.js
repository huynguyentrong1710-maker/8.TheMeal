/* the Meal Next — Nhóm 8. Prototype tĩnh, lưu dữ liệu chỉ trên thiết bị. */
const KEY = 'themeal-nhom8-v1';
const seed = { premium: false, goal: 'Giữ cân', name: 'Thành viên Nhóm 8', noticeDays: 3, foods: [{ id: 'f1', name: 'Ức gà', group: 'Thịt', qty: 600, unit: 'g', made: '', expiry: offset(4), warn: 3 }, { id: 'f2', name: 'Cà rốt', group: 'Rau củ', qty: 300, unit: 'g', made: '', expiry: offset(2), warn: 3 }, { id: 'f3', name: 'Bông cải xanh', group: 'Rau củ', qty: 250, unit: 'g', made: '', expiry: offset(1), warn: 3 }, { id: 'f4', name: 'Trứng gà', group: 'Trứng', qty: 4, unit: 'quả', made: '', expiry: offset(8), warn: 3 }, { id: 'f5', name: 'Gạo', group: 'Đồ khô', qty: 1000, unit: 'g', made: '', expiry: offset(40), warn: 3 }], chosen: [], shopping: [], courses: [], expertRequests: [], community: [], reviewQueue: [], feedback: [], helpSeen: false };
const recipes = [
    {
        "id": "r1",
        "name": "Ức gà áp chảo rau củ",
        "emoji": "🥗",
        "kcal": 385,
        "protein": 40,
        "carb": 18,
        "fat": 13,
        "mins": 25,
        "goals": [
            "Giữ cân",
            "Giảm cân",
            "Tăng cơ"
        ],
        "ingredients": [
            [
                "Ức gà",
                200,
                "g"
            ],
            [
                "Cà rốt",
                100,
                "g"
            ],
            [
                "Bông cải xanh",
                150,
                "g"
            ]
        ],
        "steps": [
            "Sơ chế gà và thái rau củ vừa ăn.",
            "Áp chảo thịt gà đến khi chín hoàn toàn.",
            "Hấp rau củ, nêm vừa phải rồi bày ra đĩa."
        ]
    },
    {
        "id": "r2",
        "name": "Cơm gà và trứng",
        "emoji": "🍛",
        "kcal": 560,
        "protein": 44,
        "carb": 58,
        "fat": 17,
        "mins": 30,
        "goals": [
            "Giữ cân",
            "Tăng cơ"
        ],
        "ingredients": [
            [
                "Ức gà",
                200,
                "g"
            ],
            [
                "Gạo",
                90,
                "g"
            ],
            [
                "Trứng gà",
                1,
                "quả"
            ]
        ],
        "steps": [
            "Nấu cơm từ gạo.",
            "Luộc trứng và áp chảo ức gà đến khi chín.",
            "Bày cơm cùng gà và trứng."
        ]
    },
    {
        "id": "r3",
        "name": "Salad trứng rau xanh",
        "emoji": "🥬",
        "kcal": 245,
        "protein": 16,
        "carb": 12,
        "fat": 15,
        "mins": 15,
        "goals": [
            "Giảm cân",
            "Giữ cân"
        ],
        "ingredients": [
            [
                "Trứng gà",
                2,
                "quả"
            ],
            [
                "Bông cải xanh",
                150,
                "g"
            ],
            [
                "Cà rốt",
                80,
                "g"
            ]
        ],
        "steps": [
            "Luộc trứng chín và cắt miếng.",
            "Chần bông cải, cà rốt rồi để ráo.",
            "Trộn rau và trứng với gia vị phù hợp."
        ]
    },
    {
        "id": "r4",
        "name": "Cơm cá hấp gừng",
        "emoji": "🐟",
        "kcal": 470,
        "protein": 34,
        "carb": 57,
        "fat": 10,
        "mins": 35,
        "goals": [
            "Giữ cân",
            "Giảm cân"
        ],
        "ingredients": [
            [
                "Cá",
                200,
                "g"
            ],
            [
                "Gạo",
                90,
                "g"
            ],
            [
                "Gừng",
                20,
                "g"
            ]
        ],
        "steps": [
            "Vo gạo và nấu cơm.",
            "Làm sạch cá, hấp cùng gừng đến khi chín.",
            "Ăn cùng cơm và rau nếu có."
        ]
    },
    {
        "id": "r5",
        "name": "Cháo gà cà rốt",
        "emoji": "🥣",
        "kcal": 360,
        "protein": 27,
        "carb": 49,
        "fat": 6,
        "mins": 40,
        "goals": [
            "Giảm cân",
            "Giữ cân"
        ],
        "ingredients": [
            [
                "Ức gà",
                130,
                "g"
            ],
            [
                "Gạo",
                80,
                "g"
            ],
            [
                "Cà rốt",
                100,
                "g"
            ]
        ],
        "steps": [
            "Ninh gạo với nước thành cháo.",
            "Cho ức gà đã sơ chế vào nấu chín.",
            "Thêm cà rốt, nêm và nấu đến khi mềm."
        ]
    },
    {
        "id": "r6",
        "name": "Bò xào bông cải",
        "emoji": "🥩",
        "kcal": 410,
        "protein": 39,
        "carb": 17,
        "fat": 19,
        "mins": 20,
        "goals": [
            "Tăng cơ",
            "Giữ cân"
        ],
        "ingredients": [
            [
                "Thịt bò",
                200,
                "g"
            ],
            [
                "Bông cải xanh",
                200,
                "g"
            ],
            [
                "Tỏi",
                15,
                "g"
            ]
        ],
        "steps": [
            "Thái mỏng thịt bò và bông cải.",
            "Xào thịt bò chín kỹ rồi cho rau vào.",
            "Nêm gia vị vừa ăn."
        ]
    }
];
const groups = ['Thịt', 'Cá', 'Rau củ', 'Trái cây', 'Trứng', 'Sữa', 'Đồ khô', 'Gia vị', 'Khác'];
const icons = { 'Thịt': '🍗', 'Cá': '🐟', 'Rau củ': '🥦', 'Trái cây': '🍎', 'Trứng': '🥚', 'Sữa': '🥛', 'Đồ khô': '🌾', 'Gia vị': '🧄', 'Khác': '📦' };
const titles = { overview: 'Tổng quan', fridge: 'Tủ lạnh thông minh', recipes: 'Gợi ý thực đơn', shopping: 'Danh sách mua sắm', experts: 'Chuyên gia & khóa học', community: 'Cộng đồng', settings: 'Cài đặt cá nhân' };
let state = load(), page = 'overview', recipeQuery = '', recipeGoal = 'Tất cả', fridgeQuery = '', fridgeFilter = 'Tất cả', courseTab = 'courses';
function offset(days) { const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + days); return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-'); }
function load() { try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    return raw && Array.isArray(raw.foods) ? { ...structuredClone(seed), ...raw } : structuredClone(seed);
}
catch {
    return structuredClone(seed);
} }
function save() { try {
    localStorage.setItem(KEY, JSON.stringify(state));
}
catch {
    toast('Không thể lưu dữ liệu trên trình duyệt này.');
} }
function e(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function uid() { return globalThis.crypto?.randomUUID?.() || String(Date.now()) + Math.random().toString(36).slice(2); }
function days(f) { return Math.round((new Date(f.expiry + 'T12:00:00') - new Date(offset(0) + 'T12:00:00')) / 86400000); }
function status(f) { let d = days(f); return d < 0 ? ['Đã hết hạn', 'expired'] : d <= Number(f.warn) ? [d === 0 ? 'Hết hạn hôm nay' : `Còn ${d} ngày`, 'warn'] : ['Còn hạn', '']; }
function activeFoods() { return state.foods.filter(f => Number(f.qty) > 0); }
function expiring() { return activeFoods().filter(f => days(f) <= Number(f.warn)); }
function countStatus() { document.getElementById('fridgeCount').textContent = activeFoods().length; }
function toast(t) { const el = document.getElementById('toast'); el.textContent = t; el.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => el.classList.remove('show'), 3000); }
function nav(p) { page = titles[p] ? p : 'overview'; history.replaceState(null, '', '#' + page); document.querySelectorAll('.nav button[data-page]').forEach(b => b.classList.toggle('active', b.dataset.page === page)); document.getElementById('crumb').textContent = titles[page]; document.querySelectorAll('.mobile-nav button').forEach(b => b.classList.toggle('active', b.dataset.page === page)); document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); render(); window.scrollTo({ top: 0, behavior: 'instant' }); }
function title(t, description, btn = '') { return `<div class="page-head"><div><span class="eyebrow">THE MEAL NEXT · NHÓM 8</span><h1>${t}</h1><p>${description}</p></div>${btn}</div>`; }
function stat(label, val, sub, icon) { return `<div class="stat"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon}</span></div><h2>${val}</h2><small>${sub}</small></div>`; }
function foodTable(foods, limit = false) { if (!foods.length)
    return `<div class="empty"><div class="big">🥬</div><h3>Chưa có thực phẩm</h3><p>Thêm nguyên liệu để bắt đầu theo dõi.</p><button class="btn" data-action="add-food">+ Thêm thực phẩm</button></div>`; return `<div class="table-wrap"><table><thead><tr><th>THỰC PHẨM</th><th>SỐ LƯỢNG</th><th>HẠN SỬ DỤNG</th><th>TRẠNG THÁI</th><th>THAO TÁC</th></tr></thead><tbody>${foods.slice(0, limit ? 5 : undefined).map(f => `<tr><td><div class="food-cell"><span class="emoji">${icons[f.group] || '📦'}</span><div>${e(f.name)}<div class="tiny">${e(f.group)}</div></div></div></td><td>${f.qty} ${e(f.unit)}</td><td>${date(f.expiry)}</td><td><span class="status ${status(f)[1]}">${status(f)[0]}</span></td><td><div class="actions"><button class="mini-btn" data-action="edit-food" data-id="${e(f.id)}" title="Chỉnh sửa">✎</button><button class="mini-btn" data-action="use-food" data-id="${e(f.id)}" title="Sử dụng thực phẩm">−</button><button class="mini-btn" data-action="remove-food" data-id="${e(f.id)}" title="Xóa">×</button></div></td></tr>`).join('')}</tbody></table></div>`; }
function date(s) { return s ? new Date(s + 'T12:00:00').toLocaleDateString('vi-VN') : '—'; }
function recommend(r) { const has = r.ingredients.filter(([name, q, u]) => inventory(name, u) >= q).length; return { matched: has, total: r.ingredients.length, pct: Math.round(has / r.ingredients.length * 100), urgent: r.ingredients.some(([n]) => activeFoods().some(f => f.name.toLowerCase() === n.toLowerCase() && days(f) >= 0 && days(f) <= f.warn)) }; }
function inventory(n, u) {
    const convert = (qty, from, to) => {
        if (from === to)
            return qty;
        if (from === 'kg' && to === 'g' || from === 'l' && to === 'ml')
            return qty * 1000;
        if (from === 'g' && to === 'kg' || from === 'ml' && to === 'l')
            return qty / 1000;
        return 0; // Different types (e.g. pieces vs grams) cannot be safely combined.
    };
    return activeFoods().filter(f => f.name.trim().toLowerCase() === n.trim().toLowerCase() && days(f) >= 0)
        .reduce((sum, f) => sum + convert(Number(f.qty), f.unit, u), 0);
}
function overview() { let food = activeFoods(), warn = expiring(); return `${title('Chào mừng trở lại! 👋', 'Hôm nay bạn muốn ăn uống thông minh hơn như thế nào?')}<section class="hero"><div><span class="eyebrow" style="color:#aaf1d5">THE MEAL SMART LIVING</span><h1>Từ nguyên liệu trong tủ lạnh đến bữa ăn lành mạnh.</h1><p>Quản lý thực phẩm · Khám phá công thức phù hợp · Mua đúng những gì cần thiết.</p><button class="btn" data-page="recipes">✦ Khám phá món ăn ngay →</button></div><div class="hero-art">🥑</div></section><div class="stats">${stat('Thực phẩm đang có', food.length, 'Được quản lý trong tủ lạnh', '▤')}${stat('Cần chú ý', warn.length, 'Sắp hoặc đã hết hạn', '⏰')}${stat('Món trong kế hoạch', state.chosen.length, 'Đã chọn để chuẩn bị', '🍽')}${stat('Cần mua bổ sung', state.shopping.filter(x => !x.done).length, 'Mặt hàng chưa hoàn tất', '🛍')}</div><div class="grid2"><section class="panel"><div class="panel-head"><h2>🧊 Tủ lạnh của bạn</h2><button class="btn soft small" data-page="fridge">Xem tất cả →</button></div>${foodTable([...food].sort((a, b) => days(a) - days(b)), true)}</section><section class="panel"><div class="panel-head"><h2>✨ Lời nhắc thông minh</h2></div>${warn.length ? `<div class="notice">⚠ Có <b>${warn.length} thực phẩm</b> cần chú ý hạn sử dụng. Ưu tiên sử dụng thực phẩm còn an toàn trước khi quá hạn.</div>` : '<div class="notice info">✓ Chưa có thực phẩm đến ngưỡng cảnh báo.</div>'}<div class="steps"><div class="step"><span>1</span><div><strong>Kiểm tra nguyên liệu</strong><p>Thêm thực phẩm mới và cập nhật lượng còn lại.</p></div></div><div class="step"><span>2</span><div><strong>Tìm món phù hợp</strong><p>Hệ thống so khớp món ăn với nguyên liệu, mục tiêu ${e(state.goal).toLowerCase()}.</p></div></div><div class="step"><span>3</span><div><strong>Mua sắm đủ dùng</strong><p>Tính đúng phần nguyên liệu còn thiếu từ kế hoạch.</p></div></div></div></section></div><div class="section-title"><h2>Gợi ý dành cho bạn</h2><a href="#recipes" data-page="recipes">Xem thêm →</a></div><div class="card-grid">${sortedRecipes().slice(0, 3).map(recipeCard).join('')}</div>`; }
function fridge() { const food = activeFoods().filter(f => f.name.toLowerCase().includes(fridgeQuery.toLowerCase()) && (fridgeFilter === 'Tất cả' || (fridgeFilter === 'Sắp hết hạn' ? days(f) <= f.warn : f.group === fridgeFilter))); return `${title('Tủ lạnh thông minh', 'Quản lý nguyên liệu, tránh lãng phí và theo dõi hạn sử dụng.', `<button class="btn" data-action="add-food">＋ Thêm thực phẩm</button>`)}<div class="stats">${stat('Đang lưu', activeFoods().length, state.premium ? 'Premium: không giới hạn' : 'Gói miễn phí: tối đa 7', '🧊')}${stat('Sắp hết hạn', expiring().filter(f => days(f) >= 0).length, 'Theo mức cảnh báo từng món', '⏰')}${stat('Đã hết hạn', expiring().filter(f => days(f) < 0).length, 'Không dùng thực phẩm quá hạn', '⚠')}${stat('Gói của bạn', state.premium ? 'Premium' : 'Free', state.premium ? 'Đang dùng thử mô phỏng' : 'Nâng cấp bất kỳ lúc nào', '✦')}</div><section class="panel"><div class="panel-head"><h2>Danh sách nguyên liệu</h2><span class="status">${activeFoods().length} sản phẩm</span></div><div class="filterbar"><input id="fridgeSearch" aria-label="Tìm thực phẩm" placeholder="⌕ Tìm theo tên thực phẩm..." value="${e(fridgeQuery)}"><select id="fridgeFilter" aria-label="Lọc nhóm">${['Tất cả', 'Sắp hết hạn', ...groups].map(g => `<option ${g === fridgeFilter ? 'selected' : ''}>${g}</option>`).join('')}</select><button class="btn secondary" data-action="reset-fridge-filter">Bỏ lọc</button></div>${foodTable(food)}</section><div class="notice info">ℹ Giới hạn 7 sản phẩm đối với tài khoản miễn phí là phương án được đề xuất trong tài liệu nhóm. Hướng dẫn bảo quản ở đây dựa trên quy tắc mẫu, không phải AI kết nối thực tế.</div>`; }
function sortedRecipes() { return [...recipes].filter(r => recipeGoal === 'Tất cả' || r.goals.includes(recipeGoal)).filter(r => r.name.toLowerCase().includes(recipeQuery.toLowerCase()) || r.ingredients.some(i => i[0].toLowerCase().includes(recipeQuery.toLowerCase()))).sort((a, b) => { const aa = recommend(a), bb = recommend(b); return Number(bb.urgent) - Number(aa.urgent) || bb.pct - aa.pct || Number(b.goals.includes(state.goal)) - Number(a.goals.includes(state.goal)); }); }
function recipeCard(r) { const m = recommend(r), selected = state.chosen.includes(r.id); return `<article class="panel recipe-card"><div class="recipe-cover"><span class="chip">${m.urgent ? '⏰ Ưu tiên dùng sớm' : '✓ ' + m.pct + '% nguyên liệu'}</span>${r.emoji}</div><div class="recipe-body"><h3>${r.name}</h3><div class="recipe-meta"><span>🔥 ${r.kcal} kcal · ${r.protein}g protein</span><span>◷ ${r.mins} phút</span></div><div class="progress" style="margin-bottom:8px"><i style="width:${m.pct}%"></i></div><p class="tiny" style="margin:0 0 14px">Đủ ${m.matched}/${m.total} nguyên liệu · Ước tính 1 khẩu phần</p><div style="display:flex;gap:8px"><button class="btn secondary small" style="flex:1" data-action="detail-recipe" data-id="${r.id}">Công thức</button><button class="btn small" style="flex:1" data-action="toggle-recipe" data-id="${r.id}">${selected ? '✓ Đã chọn' : '+ Chọn món'}</button></div></div></article>`; }
function recipesPage() { return `${title('Gợi ý thực đơn', 'Món Việt phù hợp mục tiêu, được so khớp với nguyên liệu trong tủ lạnh.', `<button class="btn" data-page="shopping">Xem kế hoạch (${state.chosen.length}) →</button>`)}<div class="notice info">✦ Đang ưu tiên công thức tận dụng thực phẩm sắp hết hạn và phù hợp mục tiêu <b>${e(state.goal)}</b>. Đây là thuật toán gợi ý minh họa, chưa sử dụng AI thật.</div><div class="filterbar"><input id="recipeSearch" placeholder="⌕ Tìm món hoặc nguyên liệu..." aria-label="Tìm công thức" value="${e(recipeQuery)}"><select id="recipeGoal" aria-label="Mục tiêu">${['Tất cả', 'Giảm cân', 'Giữ cân', 'Tăng cơ'].map(g => `<option ${g === recipeGoal ? 'selected' : ''}>${g}</option>`).join('')}</select></div><div class="card-grid">${sortedRecipes().map(recipeCard).join('') || '<p>Không tìm thấy công thức phù hợp.</p>'}</div><div class="notice" style="margin-top:20px">Giá trị năng lượng và dinh dưỡng trong mẫu chỉ là số liệu minh họa, không thay thế dữ liệu dinh dưỡng đã kiểm chứng.</div>`; }
function required() { const map = new Map(); state.chosen.forEach(id => { const r = recipes.find(x => x.id === id); if (!r)
    return; r.ingredients.forEach(([n, q, u]) => { const key = n.toLowerCase() + '|' + u; const a = map.get(key) || { name: n, qty: 0, unit: u, group: guessGroup(n) }; a.qty += q; map.set(key, a); }); }); return [...map.values()].map(a => ({ ...a, qty: Math.max(0, a.qty - inventory(a.name, a.unit)) })).filter(a => a.qty > 0); }
function guessGroup(n) { const t = n.toLowerCase(); if (/gà|bò|heo|thịt/.test(t))
    return 'Thịt'; if (/cá|tôm/.test(t))
    return 'Cá'; if (/trứng/.test(t))
    return 'Trứng'; if (/gạo/.test(t))
    return 'Đồ khô'; if (/gừng|tỏi|muối/.test(t))
    return 'Gia vị'; return 'Rau củ'; }
function shoppingPage() { return `${title('Danh sách mua sắm', 'Lên kế hoạch đúng số lượng còn thiếu từ những món đã chọn.', `<button class="btn" data-action="generate-shopping">✦ Tạo danh sách tự động</button>`)}<div class="grid2"><section class="panel"><div class="panel-head"><h2>🍽 Món ăn đã chọn</h2><span class="status">${state.chosen.length} món</span></div>${state.chosen.length ? state.chosen.map(id => { let r = recipes.find(x => x.id === id); return r ? `<div class="shopping-line"><span style="font-size:28px">${r.emoji}</span><span class="name"><b>${r.name}</b><br><small class="muted">${r.kcal} kcal · ${r.ingredients.length} nguyên liệu</small></span><button class="mini-btn" data-action="toggle-recipe" data-id="${r.id}">Bỏ</button></div>` : ''; }).join('') : '<div class="empty"><div class="big">🍽</div><p>Chưa chọn món ăn nào.</p><button class="btn soft" data-page="recipes">Chọn món ngay →</button></div>'}<div style="margin-top:16px"><button class="btn secondary" data-page="recipes">+ Thêm món vào kế hoạch</button></div></section><section class="panel"><h2>🛍 Quy trình mua sắm</h2><p class="subtitle">Tính toán theo số lượng hiện có, không thêm thừa nguyên liệu.</p><div class="steps"><div class="step"><span>1</span><div><strong>Chọn công thức</strong><p>Chọn một hoặc nhiều món ăn.</p></div></div><div class="step"><span>2</span><div><strong>Đối chiếu tủ lạnh</strong><p>Trừ nguyên liệu còn đủ và gộp các nguyên liệu trùng.</p></div></div><div class="step"><span>3</span><div><strong>Cập nhật sau mua</strong><p>Đánh dấu, thêm thực phẩm mua được vào tủ lạnh.</p></div></div></div></section></div><section class="panel"><div class="panel-head"><h2>Danh sách cần mua</h2><button class="btn soft small" data-action="add-shopping">+ Thêm thủ công</button></div>${state.shopping.length ? `${state.shopping.map((x, i) => `<div class="shopping-line"><input type="checkbox" aria-label="Đã mua ${e(x.name)}" data-action="check-shopping" data-id="${e(x.id)}" ${x.done ? 'checked' : ''}><span class="emoji">${icons[x.group] || '📦'}</span><span class="name ${x.done ? 'done' : ''}"><b>${e(x.name)}</b><br><small class="muted">${e(x.group)}</small></span><input type="number" min="0" step="1" data-action="qty-shopping" data-id="${e(x.id)}" value="${Number(x.qty)}" aria-label="Số lượng ${e(x.name)}"><span class="muted">${e(x.unit)}</span><button title="Xóa" data-action="remove-shopping" data-id="${e(x.id)}">✕</button></div>`).join('')}<div class="row" style="margin-top:22px"><span class="muted">Đã mua ${state.shopping.filter(x => x.done).length}/${state.shopping.length} mặt hàng</span><button class="btn" data-action="stock-shopping">✓ Nhập hàng đã mua vào tủ lạnh</button></div>` : '<div class="empty"><div class="big">🛒</div><h3>Danh sách đang trống</h3><p>Chọn món, sau đó bấm “Tạo danh sách tự động”.</p></div>'}</section>`; }
function expertsPage() { return `${title('Chuyên gia & khóa học', 'Không gian minh họa kết nối chuyên gia – học viên – nền tảng.', `<button class="btn" data-action="expert-apply">Đăng ký chuyên gia →</button>`)}<div class="stats">${stat('Khóa học mẫu', 2 + state.courses.length, 'Đang hiển thị trong bản demo', '📘')}${stat('Hồ sơ chờ duyệt', state.expertRequests.length, 'Yêu cầu gửi từ bản demo', '◈')}${stat('Phí nền tảng', '10%', 'Theo đề xuất Chương 2', '%')}${stat('Phí đăng ký học', '2%', 'Theo đề xuất Chương 2', '✦')}</div><div class="pill-tabs"><button data-action="expert-tab" data-tab="courses" class="${courseTab === 'courses' ? 'selected' : ''}">Khám phá khóa học</button><button data-action="expert-tab" data-tab="dashboard" class="${courseTab === 'dashboard' ? 'selected' : ''}">Quản lý chuyên gia</button><button data-action="expert-tab" data-tab="contracts" class="${courseTab === 'contracts' ? 'selected' : ''}">Hợp đồng & phí</button></div>${courseTab === 'courses' ? `<div class="expert-list">${[{ id: 'demo1', title: 'Ăn uống cân bằng cho người bận rộn', owner: 'Chuyên gia dinh dưỡng (mẫu)', price: 299000, desc: 'Kiến thức nền tảng về khẩu phần, thói quen ăn uống và kế hoạch bữa ăn.' }, { id: 'demo2', title: 'Luyện tập và dinh dưỡng tăng cơ', owner: 'Chuyên gia huấn luyện (mẫu)', price: 459000, desc: 'Lịch tập cơ bản kết hợp bữa ăn đủ năng lượng.' }, ...state.courses.map(x => ({ ...x, owner: x.owner || 'Chuyên gia (bản demo)' }))].map(c => `<div class="expert-item"><div class="row"><div class="mini-profile"><div class="profile-icon">📚</div><div><h3>${e(c.title)}</h3><span class="tiny">${e(c.owner)}</span></div></div><span class="price">${money(c.price)}</span></div><p>${e(c.desc)}</p><button class="btn small" data-action="enroll" data-id="${e(c.id)}">Xem đăng ký học →</button></div>`).join('')}</div>` : courseTab === 'dashboard' ? `<div class="grid2"><section class="panel"><h2>Bảng điều khiển chuyên gia</h2><p class="subtitle">Mô phỏng tạo khóa học và đăng ký hồ sơ. Chưa có xác minh chứng chỉ thực.</p><button class="btn" data-action="create-course">+ Tạo khóa học mẫu</button><button class="btn secondary" style="margin-left:8px" data-action="expert-apply">Gửi hồ sơ chuyên gia</button><div class="notice info" style="margin-top:18px">Đã tạo ${state.courses.length} khóa học; ${state.expertRequests.length} hồ sơ chờ xử lý. Chưa có quản trị viên hoặc hệ thống thanh toán.</div></section><section class="panel"><h2>Trạng thái kiểm duyệt</h2><div class="steps"><div class="step"><span>1</span><div><strong>Gửi hồ sơ và chứng chỉ</strong><p>Lưu yêu cầu ở chế độ bản demo.</p></div></div><div class="step"><span>2</span><div><strong>Quản trị viên xét duyệt</strong><p>Cần xây dựng backend và xác thực vai trò.</p></div></div><div class="step"><span>3</span><div><strong>Đăng khóa học</strong><p>Khóa học chỉ xuất bản thật sau kiểm duyệt.</p></div></div></div></section></div>` : `<div class="panel"><h2>Minh họa cơ chế hợp đồng và doanh thu</h2><p class="subtitle">Theo phương án nhóm, nền tảng thu 10% học phí và thêm 2% khi học viên đăng ký thành công. Việc áp dụng thực tế phải được thể hiện rõ trong hợp đồng.</p><div class="callout"><b>Ví dụ học phí 1.000.000đ</b><p>Phí sử dụng nền tảng (10%): <b>100.000đ</b><br>Phí mỗi học viên đăng ký thành công (2%): <b>20.000đ</b><br><b>Tổng khoản phí minh họa: 120.000đ</b></p></div><div class="notice" style="margin-top:15px">Chức năng ký điện tử, chữ ký số hợp lệ, đối soát thanh toán và hợp đồng pháp lý chưa được triển khai trong bản tĩnh này.</div></div>`}`; }
function money(n) { return Number(n).toLocaleString('vi-VN') + 'đ'; }
function communityPage() { return `${title('Cộng đồng & đóng góp món ăn', 'Chia sẻ công thức, giúp mở rộng dữ liệu món Việt có kiểm duyệt.', `<button class="btn" data-action="community-post">+ Đóng góp công thức</button>`)}<div class="grid2"><section class="panel"><h2>Bài viết của cộng đồng</h2><p class="subtitle">Nội dung người dùng gửi ở chế độ thử nghiệm; cần chuyên gia hoặc quản trị viên duyệt trước khi xuất bản chính thức.</p>${state.community.length ? state.community.map(x => `<div class="expert-item" style="margin-bottom:12px"><span class="status warn">Chờ kiểm duyệt</span><h3>${e(x.name)}</h3><p>${e(x.desc)}</p><span class="tiny">Gửi ngày ${date(x.date)}</span></div>`).join('') : '<div class="empty"><div class="big">🥗</div><h3>Đóng góp món ăn đầu tiên</h3><p>Công thức do cộng đồng tạo cần được kiểm duyệt trước khi bổ sung vào cơ sở dữ liệu.</p></div>'}</section><section class="panel"><h2>Quy trình chất lượng dữ liệu</h2><div class="steps"><div class="step"><span>1</span><div><strong>Người dùng gửi công thức</strong><p>Tên món, nguyên liệu, cách chế biến và thông tin mô tả.</p></div></div><div class="step"><span>2</span><div><strong>Kiểm duyệt chuyên môn</strong><p>Rà soát độ chính xác, tính phù hợp và an toàn.</p></div></div><div class="step"><span>3</span><div><strong>Thêm vào kho công thức</strong><p>Chỉ cập nhật chính thức sau khi được xét duyệt.</p></div></div></div></section></div>`; }
function settingsPage() { return `${title('Cài đặt cá nhân', 'Tùy chỉnh mục tiêu, lời nhắc và gói dịch vụ trong bản demo.')}<div class="grid2"><section class="panel"><h2>Hồ sơ và mục tiêu</h2><p class="subtitle">Thông tin lưu cục bộ trên trình duyệt hiện tại.</p><form id="settingsForm"><div class="field"><label>Tên hiển thị</label><input name="name" value="${e(state.name)}" maxlength="60" required></div><div class="field"><label>Mục tiêu sức khỏe</label><select name="goal">${['Giảm cân', 'Giữ cân', 'Tăng cơ'].map(g => `<option ${g === state.goal ? 'selected' : ''}>${g}</option>`).join('')}</select></div><div class="field"><label>Cảnh báo mặc định trước hạn (ngày)</label><input type="number" name="noticeDays" min="0" max="30" value="${state.noticeDays}" required></div><button class="btn" type="submit">Lưu thay đổi</button></form></section><section class="panel"><h2>Gói dịch vụ</h2><div class="callout"><span class="eyebrow">GÓI HIỆN TẠI</span><h2 style="font-size:25px;margin:10px 0">${state.premium ? 'Premium (demo)' : 'Miễn phí'}</h2><p>${state.premium ? 'Không giới hạn số lượng thực phẩm trong bản demo.' : 'Được quản lý tối đa 7 thực phẩm trong Tủ lạnh thông minh.'}</p><button class="btn" data-action="toggle-premium">${state.premium ? 'Quay lại gói Free' : 'Bật dùng thử Premium'}</button></div><div class="notice" style="margin-top:18px">Đây là công tắc mô phỏng phân quyền gói dịch vụ, không thu tiền và không đại diện cho bảng giá chính thức.</div><button class="btn danger small" data-action="reset-demo">Khôi phục toàn bộ dữ liệu mẫu</button></section></div>`; }
function render() { countStatus(); document.getElementById('view').innerHTML = ({ overview, fridge, recipes: recipesPage, shopping: shoppingPage, experts: expertsPage, community: communityPage, settings: settingsPage }[page] || overview)(); document.getElementById('noticeDot').style.display = expiring().length ? 'block' : 'none'; }
function showModal(content) { closeModal(); let root = document.createElement('div'); root.className = 'modal-layer'; root.id = 'modalRoot'; root.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${content}</div>`; document.body.append(root); root.addEventListener('click', ev => { if (ev.target === root || ev.target.closest('.modal-close'))
    closeModal(); }); root.querySelector('input,button,select')?.focus(); }
function closeModal() { document.getElementById('modalRoot')?.remove(); }
function modalHead(t) { return `<div class="modal-top"><div><span class="eyebrow">THE MEAL NEXT</span><h2>${t}</h2></div><button class="modal-close" type="button" aria-label="Đóng">×</button></div>`; }
function foodForm(id) { const f = state.foods.find(x => x.id === id) || { name: '', group: 'Rau củ', qty: 100, unit: 'g', made: '', expiry: offset(5), warn: state.noticeDays }; showModal(`${modalHead(id ? 'Chỉnh sửa thực phẩm' : 'Thêm thực phẩm mới')}<form id="foodForm"><input type="hidden" name="id" value="${e(id || '')}"><div class="form-grid"><div class="field"><label>Tên thực phẩm *</label><input name="name" placeholder="Ví dụ: Ức gà" maxlength="70" required value="${e(f.name)}"></div><div class="field"><label>Nhóm thực phẩm</label><select name="group">${groups.map(g => `<option ${g === f.group ? 'selected' : ''}>${g}</option>`).join('')}</select></div><div class="field"><label>Số lượng *</label><input name="qty" type="number" min="1" max="999999" value="${f.qty}" required></div><div class="field"><label>Đơn vị</label><select name="unit">${['g', 'kg', 'ml', 'l', 'quả', 'hộp', 'gói', 'cái'].map(u => `<option ${u === f.unit ? 'selected' : ''}>${u}</option>`).join('')}</select></div><div class="field"><label>Ngày sản xuất (tùy chọn)</label><input name="made" type="date" value="${e(f.made)}"></div><div class="field"><label>Hạn sử dụng *</label><input name="expiry" type="date" value="${e(f.expiry)}" required></div><div class="field"><label>Cảnh báo trước hạn (ngày)</label><input name="warn" type="number" min="0" max="30" value="${f.warn}" required></div></div><div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button class="btn" type="submit">${id ? 'Lưu chỉnh sửa' : 'Thêm vào tủ lạnh'}</button></div></form>`); }
function care(f) { const opts = { 'Thịt': 'Bảo quản lạnh ở 0–4°C nếu sẽ dùng sớm; đông lạnh khi cần lưu lâu. Nấu chín kỹ và tránh nhiễm chéo.', 'Cá': 'Giữ lạnh 0–4°C và dùng sớm; đông lạnh nếu chưa chế biến. Không sử dụng khi có dấu hiệu hư hỏng.', 'Rau củ': 'Loại bỏ lá hỏng, bảo quản phù hợp với từng loại trong ngăn rau và tránh làm dập nát.', 'Trứng': 'Giữ trong ngăn mát và tránh thay đổi nhiệt độ liên tục; nấu chín trước khi ăn.', 'Sữa': 'Tuân thủ nhiệt độ trên nhãn, giữ lạnh sau khi mở và dùng trong thời gian khuyến nghị.', 'Đồ khô': 'Đựng trong hộp kín, giữ nơi khô thoáng, tránh ẩm và côn trùng.', 'Gia vị': 'Đậy kín, bảo quản theo nhãn sản phẩm, tránh ẩm và ánh nắng trực tiếp.', 'Trái cây': 'Loại bỏ quả dập, giữ riêng loại dễ chín và bảo quản theo đặc tính từng loại.', 'Khác': 'Đọc nhãn bảo quản, theo dõi hạn sử dụng và dấu hiệu hư hỏng.' }; return opts[f.group] || opts.Khác; }
function recipeDetail(id) { const r = recipes.find(x => x.id === id); if (!r)
    return; showModal(`${modalHead(r.emoji + ' ' + r.name)}<p class="subtitle">${r.kcal} kcal · ${r.protein}g protein · ${r.carb}g carb · ${r.fat}g fat · ${r.mins} phút</p><h3>Nguyên liệu (1 khẩu phần)</h3>${r.ingredients.map(([n, q, u]) => `<div class="shopping-line"><span class="name">${e(n)}</span><b>${q} ${u}</b><span class="status ${inventory(n, u) >= q ? '' : 'warn'}">${inventory(n, u) >= q ? 'Đã đủ' : 'Còn thiếu'}</span></div>`).join('')}<h3 style="margin-top:20px">Cách làm</h3><div class="steps">${r.steps.map((s, i) => `<div class="step"><span>${i + 1}</span><p>${e(s)}</p></div>`).join('')}</div><div class="notice" style="margin-top:16px">Thành phần và dinh dưỡng chỉ dùng để minh họa công thức. Kiểm tra nguyên liệu và an toàn thực phẩm khi chế biến.</div><div class="form-actions"><button class="btn secondary modal-close">Đóng</button><button class="btn" data-action="toggle-recipe" data-id="${r.id}">${state.chosen.includes(r.id) ? 'Bỏ khỏi kế hoạch' : '+ Chọn món này'}</button></div>`); }
function useFood(id) { const f = state.foods.find(x => x.id === id); if (!f)
    return; showModal(`${modalHead('Sử dụng thực phẩm')}<p>Đang có <b>${e(f.name)}: ${f.qty} ${e(f.unit)}</b>.</p><div class="notice info">💡 ${e(care(f))}</div><form id="useFoodForm"><input type="hidden" name="id" value="${e(id)}"><div class="field"><label>Số lượng đã sử dụng (${e(f.unit)})</label><input name="qty" type="number" min="1" max="${f.qty}" value="${Math.min(f.qty, 100)}" required></div><div class="form-actions"><button class="btn secondary modal-close" type="button">Hủy</button><button class="btn" type="submit">Cập nhật tồn kho</button></div></form>`); }
function shoppingForm() { showModal(`${modalHead('Thêm mặt hàng cần mua')}<form id="shoppingForm"><div class="field"><label>Tên nguyên liệu</label><input name="name" required maxlength="70"></div><div class="form-grid"><div class="field"><label>Số lượng</label><input name="qty" type="number" min="1" value="100" required></div><div class="field"><label>Đơn vị</label><select name="unit">${['g', 'kg', 'ml', 'l', 'quả', 'hộp', 'gói', 'cái'].map(x => `<option>${x}</option>`).join('')}</select></div></div><div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button class="btn">Thêm vào danh sách</button></div></form>`); }
function applyForm() { showModal(`${modalHead('Đăng ký tài khoản chuyên gia')}<div class="notice">Mẫu hồ sơ chỉ lưu trên trình duyệt; chưa tải chứng chỉ lên máy chủ và chưa xác minh danh tính.</div><form id="expertForm"><div class="field"><label>Họ tên chuyên gia</label><input name="name" required maxlength="80"></div><div class="field"><label>Chuyên môn</label><select name="field"><option>Dinh dưỡng</option><option>Huấn luyện thể chất</option></select></div><div class="field"><label>Thông tin chứng chỉ và kinh nghiệm</label><textarea rows="3" name="cred" required maxlength="700" placeholder="Nêu chứng chỉ, đơn vị cấp, kinh nghiệm..."></textarea></div><label class="checkrow"><input type="checkbox" required> Tôi hiểu đây là đăng ký mô phỏng và hồ sơ cần được xét duyệt.</label><div class="form-actions"><button class="btn" type="submit">Gửi hồ sơ (demo)</button></div></form>`); }
function courseForm() { showModal(`${modalHead('Tạo khóa học mẫu')}<form id="courseForm"><div class="field"><label>Tên khóa học</label><input name="title" maxlength="90" required></div><div class="field"><label>Mô tả</label><textarea name="desc" maxlength="500" rows="3" required></textarea></div><div class="field"><label>Học phí minh họa (VNĐ)</label><input name="price" type="number" min="0" max="100000000" value="299000" required></div><div class="form-actions"><button class="btn">Lưu bản nháp demo</button></div></form>`); }
function communityForm() { showModal(`${modalHead('Đóng góp công thức')}<form id="communityForm"><div class="field"><label>Tên món ăn</label><input name="name" maxlength="90" required></div><div class="field"><label>Nguyên liệu và cách chế biến</label><textarea name="desc" maxlength="1200" rows="5" required></textarea></div><div class="notice">Công thức được lưu ở trạng thái chờ kiểm duyệt; chưa xuất bản công khai.</div><div class="form-actions"><button class="btn">Gửi đóng góp</button></div></form>`); }
function enroll(id) { const all = [{ id: 'demo1', title: 'Ăn uống cân bằng cho người bận rộn', price: 299000 }, { id: 'demo2', title: 'Luyện tập và dinh dưỡng tăng cơ', price: 459000 }, ...state.courses]; const c = all.find(x => x.id === id); if (!c)
    return; showModal(`${modalHead('Đăng ký khóa học')}<h3>${e(c.title)}</h3><p>Học phí dự kiến: <b class="price">${money(c.price)}</b></p><div class="notice">Bản prototype chưa kết nối cổng thanh toán và chưa hỗ trợ chữ ký số hợp lệ. Không nhập thông tin thẻ hoặc chuyển tiền.</div><div class="callout">Trước khi đăng ký thực tế, học viên cần xem các điều khoản khóa học, trách nhiệm của chuyên gia, nền tảng và học viên; hoàn thành ký hợp đồng điện tử phù hợp.</div><div class="form-actions"><button class="btn secondary modal-close">Đóng</button><button class="btn" data-action="demo-enroll">Tôi đã hiểu (demo)</button></div>`); }
function generateShopping() { if (!state.chosen.length) {
    toast('Hãy chọn ít nhất một món ăn trước.');
    return;
} let arr = required(); state.shopping = arr.map(x => ({ id: uid(), ...x, done: false })); save(); render(); toast(arr.length ? `Đã tổng hợp ${arr.length} nguyên liệu còn thiếu.` : 'Nguyên liệu hiện có đã đủ cho các món đã chọn.'); }
function stockShopping() {
    const items = state.shopping.filter(x => x.done);
    if (!items.length) {
        toast('Hãy đánh dấu mặt hàng đã mua trước.');
        return;
    }
    if (!state.premium && activeFoods().length + items.length > 7) {
        toast(`Gói miễn phí tối đa 7 mục. Hiện có ${activeFoods().length}; hãy cập nhật/xóa mục cũ hoặc dùng bản thử Premium.`);
        return;
    }
    const fields = items.map((x, i) => `<div class="stock-batch">
    <div class="row"><strong>${e(x.name)}</strong><span class="chip">${e(x.qty)} ${e(x.unit)}</span></div>
    <div class="form-grid" style="margin-top:10px">
      <div class="field"><label for="stockDate${i}">Hạn sử dụng thực tế *</label><input id="stockDate${i}" type="date" name="expiry${i}" min="${offset(0)}" required></div>
      <div class="field"><label for="stockMade${i}">Ngày sản xuất (nếu biết)</label><input id="stockMade${i}" type="date" name="made${i}" max="${offset(365)}"></div>
    </div>
  </div>`).join('');
    showModal(`${modalHead('Xác nhận thực phẩm vừa mua')}
    <div class="notice">Nhập hạn sử dụng ghi trên bao bì cho từng mặt hàng. Không tự suy đoán hạn dùng để tránh mất an toàn thực phẩm.</div>
    <form id="stockConfirmForm">${fields}<div class="form-actions"><button type="button" class="btn secondary modal-close">Hủy</button><button type="submit" class="btn">Xác nhận nhập tủ lạnh</button></div></form>`);
}
function confirmStockShopping(data) {
    const items = state.shopping.filter(x => x.done);
    if (!items.length)
        return;
    if (!state.premium && activeFoods().length + items.length > 7) {
        toast('Không đủ số ô trống trong gói miễn phí.');
        return;
    }
    const lots = items.map((x, i) => ({ id: uid(), name: x.name, group: x.group, qty: Number(x.qty), unit: x.unit,
        made: data['made' + i] || '', expiry: data['expiry' + i], warn: state.noticeDays }));
    if (lots.some(x => !x.expiry || x.expiry < offset(0) || x.made && x.made > x.expiry || !Number.isFinite(x.qty) || x.qty <= 0)) {
        toast('Hãy kiểm tra hạn sử dụng, ngày sản xuất và số lượng từng mặt hàng.');
        return;
    }
    // Keep separate batches when expiry dates differ; never overwrite existing expiry data.
    state.foods.push(...lots);
    const purchasedIds = new Set(items.map(x => x.id));
    state.shopping = state.shopping.filter(x => !purchasedIds.has(x.id));
    save();
    closeModal();
    render();
    toast(`Đã nhập ${lots.length} mặt hàng với hạn dùng bạn xác nhận.`);
}
function togglePremium() { if (state.premium && activeFoods().length > 7) {
    toast('Hãy giảm tồn kho xuống tối đa 7 sản phẩm trước khi về gói Free.');
    return;
} state.premium = !state.premium; save(); render(); toast('Đã đổi gói mô phỏng. Không phát sinh thanh toán.'); }
function clickAction(a, id, el) { switch (a) {
    case 'add-food': return foodForm();
    case 'edit-food': return foodForm(id);
    case 'use-food': return useFood(id);
    case 'remove-food':
        if (confirm('Xóa thực phẩm này khỏi tủ lạnh?')) {
            state.foods = state.foods.filter(x => x.id !== id);
            save();
            render();
            toast('Đã xóa thực phẩm.');
        }
        return;
    case 'detail-recipe': return recipeDetail(id);
    case 'toggle-recipe':
        state.chosen = state.chosen.includes(id) ? state.chosen.filter(x => x !== id) : [...state.chosen, id];
        save();
        closeModal();
        render();
        return toast('Đã cập nhật kế hoạch món ăn.');
    case 'generate-shopping': return generateShopping();
    case 'add-shopping': return shoppingForm();
    case 'check-shopping': {
        let x = state.shopping.find(x => x.id === id);
        if (x)
            x.done = el.checked;
        save();
        return render();
    }
    case 'remove-shopping':
        state.shopping = state.shopping.filter(x => x.id !== id);
        save();
        return render();
    case 'stock-shopping': return stockShopping();
    case 'reset-fridge-filter':
        fridgeQuery = '';
        fridgeFilter = 'Tất cả';
        return render();
    case 'expert-tab':
        courseTab = el.dataset.tab;
        return render();
    case 'expert-apply': return applyForm();
    case 'create-course': return courseForm();
    case 'enroll': return enroll(id);
    case 'demo-enroll':
        closeModal();
        return toast('Đây là bản demo; chưa thực hiện đăng ký hoặc thanh toán.');
    case 'community-post': return communityForm();
    case 'toggle-premium': return togglePremium();
    case 'reset-demo':
        if (confirm('Khôi phục dữ liệu mẫu? Tất cả nội dung đã nhập trên trình duyệt này sẽ bị mất.')) {
            state = structuredClone(seed);
            save();
            nav('overview');
            toast('Đã khôi phục dữ liệu mẫu.');
        }
        return;
} }
document.addEventListener('click', ev => { let p = ev.target.closest('[data-page]'); if (p) {
    ev.preventDefault();
    return nav(p.dataset.page);
} let a = ev.target.closest('[data-action]'); if (a && a.tagName !== 'INPUT') {
    ev.preventDefault();
    return clickAction(a.dataset.action, a.dataset.id, a);
} if (ev.target.closest('.modal-close'))
    return closeModal(); });
document.addEventListener('change', ev => { let el = ev.target; if (el.id === 'fridgeFilter') {
    fridgeFilter = el.value;
    render();
} if (el.id === 'recipeGoal') {
    recipeGoal = el.value;
    render();
} if (el.dataset.action === 'check-shopping')
    clickAction('check-shopping', el.dataset.id, el); if (el.dataset.action === 'qty-shopping') {
    let x = state.shopping.find(x => x.id === el.dataset.id);
    if (x) {
        x.qty = Math.max(0, Number(el.value) || 0);
        save();
        render();
    }
} });
document.addEventListener('input', ev => { let el = ev.target; if (el.id === 'fridgeSearch') {
    fridgeQuery = el.value;
    let pos = el.selectionStart;
    render();
    let current = document.getElementById('fridgeSearch');
    current.focus();
    current.setSelectionRange(pos, pos);
} if (el.id === 'recipeSearch') {
    recipeQuery = el.value;
    let pos = el.selectionStart;
    render();
    let current = document.getElementById('recipeSearch');
    current.focus();
    current.setSelectionRange(pos, pos);
} });
document.addEventListener('submit', ev => { ev.preventDefault(); const f = ev.target, d = Object.fromEntries(new FormData(f)); if (f.getAttribute('id') === 'foodForm') {
    let q = Number(d.qty), w = Number(d.warn);
    if (!(q > 0) || w < 0 || w > 30 || d.made && d.made > d.expiry) {
        toast('Kiểm tra số lượng, ngày sản xuất, hạn sử dụng và số ngày cảnh báo.');
        return;
    }
    if (!d.id && !state.premium && activeFoods().length >= 7) {
        toast('Gói Free đã đủ 7 sản phẩm.');
        return;
    }
    let x = { id: d.id || uid(), name: d.name.trim(), group: d.group, qty: q, unit: d.unit, made: d.made, expiry: d.expiry, warn: w };
    let i = state.foods.findIndex(y => y.id === d.id);
    if (i >= 0)
        state.foods[i] = x;
    else
        state.foods.push(x);
    save();
    closeModal();
    render();
    toast('Đã lưu thực phẩm. Kiểm tra gợi ý bảo quản.');
    showModal(`${modalHead('Gợi ý bảo quản: ' + e(x.name))}<div class="callout">🌿 ${e(care(x))}</div><div class="notice" style="margin-top:15px">Hướng dẫn mang tính tham khảo. Hãy ưu tiên nhãn sản phẩm và khuyến cáo an toàn thực phẩm.</div><div class="form-actions"><button class="btn modal-close">Đã hiểu</button></div>`);
}
else if (f.id === 'useFoodForm') {
    let x = state.foods.find(y => y.id === d.id);
    if (!x)
        return;
    let q = Number(d.qty);
    if (q <= 0 || q > x.qty) {
        toast('Số lượng sử dụng không hợp lệ.');
        return;
    }
    x.qty -= q;
    save();
    closeModal();
    render();
    toast('Đã trừ lượng thực phẩm đã sử dụng.');
}
else if (f.id === 'stockConfirmForm') {
    confirmStockShopping(d);
}
else if (f.id === 'shoppingForm') {
    state.shopping.push({ id: uid(), name: d.name.trim(), group: guessGroup(d.name), qty: Number(d.qty), unit: d.unit, done: false });
    save();
    closeModal();
    render();
    toast('Đã thêm mặt hàng.');
}
else if (f.id === 'expertForm') {
    state.expertRequests.push({ id: uid(), name: d.name.trim(), field: d.field, cred: d.cred.trim(), date: offset(0), status: 'pending' });
    save();
    closeModal();
    render();
    toast('Đã lưu hồ sơ chờ duyệt (chế độ demo).');
}
else if (f.id === 'courseForm') {
    state.courses.push({ id: uid(), title: d.title.trim(), desc: d.desc.trim(), price: Number(d.price), owner: 'Khóa học tự tạo · Chờ kiểm duyệt' });
    save();
    closeModal();
    render();
    toast('Đã lưu khóa học mẫu.');
}
else if (f.id === 'communityForm') {
    state.community.push({ id: uid(), name: d.name.trim(), desc: d.desc.trim(), date: offset(0) });
    save();
    closeModal();
    render();
    toast('Đã lưu công thức chờ kiểm duyệt.');
}
else if (f.id === 'settingsForm') {
    state.name = d.name.trim();
    state.goal = d.goal;
    state.noticeDays = Number(d.noticeDays);
    save();
    render();
    toast('Đã cập nhật hồ sơ và mục tiêu.');
} });
document.getElementById('menuBtn').onclick = () => { document.getElementById('sidebar').classList.add('open'); document.getElementById('overlay').classList.add('show'); };
document.getElementById('overlay').onclick = () => { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); };
document.getElementById('upgradeBtn').onclick = () => nav('settings');
document.getElementById('avatarBtn').onclick = () => nav('settings');
document.getElementById('notificationsBtn').onclick = () => { let a = expiring(); showModal(`${modalHead('Thông báo hạn sử dụng')}${a.length ? a.map(f => `<div class="shopping-line"><span class="emoji">${icons[f.group] || '📦'}</span><span class="name"><b>${e(f.name)}</b><br><span class="status ${status(f)[1]}">${status(f)[0]}</span></span></div>`).join('') : '<p>Chưa có thực phẩm cần cảnh báo.</p>'}<p class="tiny">Thông báo hiển thị khi mở website; chưa gửi push notification khi website đóng.</p>`); };
document.getElementById('today').textContent = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' });
window.addEventListener('hashchange', () => nav(location.hash.slice(1)));
nav(location.hash.slice(1) || 'overview');
