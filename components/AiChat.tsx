'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import clsx from 'clsx';

type Message = {
    role: 'user' | 'bot';
    content: string;
};

export default function AiChat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: 'Ask me anything about the Sri Lankan budget! e.g., "How much for education?"' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setIsTyping(true);

        // Mock AI Response
        setTimeout(() => {
            let reply = "I'm still learning the specifics of the budget data.";
            if (userMsg.toLowerCase().includes('medicine') || userMsg.toLowerCase().includes('health')) {
                reply = "In the selected budget year, the allocation for Health was LKR 600 Billion. Approximately LKR 120 Billion was spent on medicine imports.";
            } else if (userMsg.toLowerCase().includes('education')) {
                reply = "The education sector received LKR 800 Billion.";
            } else if (userMsg.toLowerCase().includes('debt')) {
                reply = "Debt repayment is the largest category, accounting for LKR 4,500 Billion.";
            }

            setMessages(prev => [...prev, { role: 'bot', content: reply }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-[500px]">
            <div className="bg-deep-blue text-white p-4 flex items-center gap-2">
                <Bot className="w-6 h-6" />
                <div>
                    <h3 className="font-bold">Ask the Budget</h3>
                    <p className="text-xs text-blue-200">AI-Powered Assistant (Beta)</p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" ref={scrollRef}>
                {messages.map((msg, idx) => (
                    <div key={idx} className={clsx("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
                        <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                            msg.role === 'bot' ? "bg-lion-gold text-deep-blue" : "bg-deep-blue text-white")}>
                            {msg.role === 'bot' ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div className={clsx("p-3 rounded-lg max-w-[80%] text-sm",
                            msg.role === 'bot' ? "bg-white border border-gray-200 text-gray-800" : "bg-deep-blue text-white")}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-lion-gold flex items-center justify-center shrink-0">
                            <Bot size={16} />
                        </div>
                        <div className="bg-white border border-gray-200 p-3 rounded-lg flex gap-1 items-center">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your question here..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-gold"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-deep-blue text-white p-2 rounded-lg hover:bg-blue-900 transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
