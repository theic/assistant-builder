import { MyAssistant } from '@/components/MyAssistant';

export default async function BuildAssistant({
  params
}: {
  params: { assistantId: string };
}) {
  const { assistantId } = await params;

  return (
    <main className="h-dvh">
      <div className="flex h-full">
        <div className="flex-1 border-r border-gray-300">
          <MyAssistant
            assistantId="builder"
            templateAssistantId={assistantId}
          />
        </div>
        <div className="flex-1">
          <MyAssistant
            assistantId={assistantId}
            templateAssistantId={assistantId}
            allowImageAttachments={true}
          />
        </div>
      </div>
    </main>
  );
}
