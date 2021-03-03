export default interface QueueBase {
    /**
     * Callback é chamado quando o Robô envia uma mensagem
     * @returns {Promise<void>} A função é executada assíncronamente
     */
    onSend(queue: string): Promise<void>;

    /**
     * Callback é chamado quando o Robô recebe uma mensagem
     */
    onReceived(): Promise<void>;
}