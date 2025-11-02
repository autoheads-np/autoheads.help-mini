// ===== PROFILE MODAL =====
const profileBtn = document.getElementById("profileBtn");
const profileModal = document.getElementById("profileModal");
const closeBtn = document.querySelector(".close");

if (profileBtn && profileModal) {
  profileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    profileModal.style.display = "flex";
    document.body.classList.add("blurred");
  });

  closeBtn.addEventListener("click", () => {
    profileModal.style.display = "none";
    document.body.classList.remove("blurred");
  });

  window.addEventListener("click", (e) => {
    if (e.target === profileModal) {
      profileModal.style.display = "none";
      document.body.classList.remove("blurred");
    }
  });
}

// ===== CHAT POPUP =====
const chatPopup = document.getElementById("chatPopup");
const chatName = document.getElementById("chatName");
const chatBody = document.getElementById("chatBody");
const sendBtn = document.getElementById("sendBtn");
const chatText = document.getElementById("chatText");
const closeChat = document.querySelector(".close-chat");

if (chatPopup) {
  document.querySelectorAll(".message-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      chatName.textContent = name;
      chatPopup.style.display = "flex";
    });
  });

  if (closeChat) {
    closeChat.addEventListener("click", () => {
      chatPopup.style.display = "none";
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const msg = chatText.value.trim();
      if (msg === "") return;

      const newMsg = document.createElement("div");
      newMsg.classList.add("msg", "user");
      newMsg.textContent = msg;
      chatBody.appendChild(newMsg);
      chatText.value = "";

      // Scroll to bottom
      chatBody.scrollTop = chatBody.scrollHeight;

      // Mechanic auto reply
      setTimeout(() => {
        const reply = document.createElement("div");
        reply.classList.add("msg", "mechanic");
        reply.textContent = "Got it! I'll check and reply soon.";
        chatBody.appendChild(reply);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 800);
    });
  }
}
