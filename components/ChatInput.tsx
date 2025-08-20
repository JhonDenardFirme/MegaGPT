"use client";
import React from "react";
import { SendHorizonal } from "lucide-react";

export function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void | Promise<void>;
}) {
  const [text, setText] = React.useState("");
  const taRef = React.useRef<HTMLTextAreaElement | null>(null);

  // simple auto-resize: grow to content, CSS caps max height
  const resize = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  React.useEffect(resize, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setText("");
    await onSend(value);
    requestAnimationFrame(resize);
  };

  // Enter = send, Shift+Enter = newline
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      (e.currentTarget.form as HTMLFormElement)?.requestSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center justify-center">
      <div className="group relative w-full max-w-2xl overflow-hidden rounded-2xl border bg-neutral-900">
        <textarea
          ref={taRef}
          value={text}
          onChange={(e) => { setText(e.target.value); resize(); }}
          onKeyDown={onKeyDown}
          rows={1}
          placeholder="Ask anything…"
          aria-label="Message"
          className="block w-full resize-none overflow-y-auto bg-transparent
                     px-4 py-3.5 pr-12 text-sm leading-6 text-white
                     placeholder:text-neutral-400 focus:outline-none"
          // cap height here; JS grows up to this, then scrolls
          style={{ maxHeight: "180px" }}
        />

        <button
          type="submit"
          disabled={!text.trim()}
          aria-label="Send message"
          className="absolute bottom-1 right-2.5 grid h-10 w-10 place-items-center
                     rounded-lg bg-neutral-800 text-white transition
                     hover:scale-[1.03] active:scale-[0.98]
                     disabled:opacity-40 disabled:cursor-not-allowed
                     focus:outline-none"
        >
          <SendHorizonal size={16} />
        </button>

        {/* bottom-only glow */}
        <span
          className="pointer-events-none absolute -bottom-px left-2 right-2 block h-[3px]
                     bg-gradient-to-r from-transparent via-cyan-500 to-transparent
                     opacity-0 transition duration-300
                     group-hover:opacity-100 group-focus-within:opacity-100"
        />
      </div>
    </form>
  );
}
