import { useSelector } from "react-redux";
import type { RootState } from "../store/store";


export default function ChatHeader() {

    // ======== select a conversationId from the store ======== //
    const selectedConversationId = useSelector((state: RootState) => state.chat.selectedConversationId);

    // ======== select the conversation details based on the selected ID ======== //
    const selectedConversation = useSelector((state: RootState) =>
        state.chat.conversations.find((conv) => conv.id === selectedConversationId));

    return (
        <div>
            {selectedConversation ? (
                <>
                    <h2>{selectedConversation.name}</h2>

                    <span>
                        {selectedConversation.online ? "🟢 Online" : "⚫ Offline"}
                    </span>
                </>
            ) : (
                <h2>Select a conversation</h2>
            )}
        </div>
    );
}