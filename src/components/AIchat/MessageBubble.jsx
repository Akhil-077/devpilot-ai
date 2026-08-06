import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, Bot, User } from "lucide-react";

function MessageBubble({ message }) {
  const isUser = message.sender === "user";
  const [copied, setCopied] = useState(false);

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`w-full flex gap-4 mb-8 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
          <Bot size={20} className="text-white" />
        </div>
      )}

      <div
        className={`max-w-4xl rounded-2xl shadow-lg ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            : "bg-[#1F2937] border border-gray-700 text-white"
        }`}
      >
        <div className="px-6 py-5">
          {isUser ? (
            <p className="leading-8 whitespace-pre-wrap">
              {message.text}
            </p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");

                  if (!inline && match) {
                    const code = String(children).replace(/\n$/, "");

                    return (
                      <div className="relative my-5">
                        <button
                          onClick={() => copyCode(code)}
                          className="absolute right-3 top-3 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-xs px-3 py-2 rounded-lg transition"
                        >
                          {copied ? (
                            <>
                              <Check size={14} />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              Copy
                            </>
                          )}
                        </button>

                        <SyntaxHighlighter
                          language={match[1]}
                          style={oneDark}
                          customStyle={{
                            borderRadius: "12px",
                            padding: "22px",
                            fontSize: "14px",
                          }}
                          {...props}
                        >
                          {code}
                        </SyntaxHighlighter>
                      </div>
                    );
                  }

                  return (
                    <code className="bg-gray-800 px-2 py-1 rounded">
                      {children}
                    </code>
                  );
                },

                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mb-5">{children}</h1>
                ),

                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mb-4">{children}</h2>
                ),

                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mb-3">{children}</h3>
                ),

                p: ({ children }) => (
                  <p className="leading-8 mb-4">{children}</p>
                ),

                ul: ({ children }) => (
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    {children}
                  </ul>
                ),

                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 space-y-2 mb-4">
                    {children}
                  </ol>
                ),

                table: ({ children }) => (
                  <div className="overflow-x-auto my-5">
                    <table className="table-auto border border-gray-600 w-full">
                      {children}
                    </table>
                  </div>
                ),

                th: ({ children }) => (
                  <th className="border border-gray-600 px-4 py-2 bg-gray-800">
                    {children}
                  </th>
                ),

                td: ({ children }) => (
                  <td className="border border-gray-600 px-4 py-2">
                    {children}
                  </td>
                ),
              }}
            >
              {message.text}
            </ReactMarkdown>
          )}

          <div className="text-xs text-gray-400 mt-5 text-right">
            {message.time}
          </div>
        </div>
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
          <User size={18} className="text-white" />
        </div>
      )}
    </div>
  );
}

export default MessageBubble;