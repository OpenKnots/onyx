import ErrorPageLayout from "@/components/errorPages/ErrorPageLayout";
import Text from "@/refresh-components/texts/Text";
import { DOCS_BASE_URL } from "@/lib/constants";
import { SvgAlertCircle } from "@opal/icons";

export default function Error() {
  return (
    <ErrorPageLayout>
      <div className="flex flex-row items-center gap-2">
        <Text as="p" headingH2>
          We encountered an issue
        </Text>
        <SvgAlertCircle className="w-[1.5rem] h-[1.5rem] stroke-text-04" />
      </div>

      <Text as="p" text03>
        We were unable to load your Onyx settings. This may be caused by an
        incomplete configuration or a temporary connectivity issue.
      </Text>

      <Text as="p" text03>
        <strong>For administrators:</strong> Please verify that all required
        environment variables are set and that backend services are running
        correctly. Our{" "}
        <a
          className="text-action-link-05"
          href={`${DOCS_BASE_URL}?utm_source=app&utm_medium=error_page&utm_campaign=config_error`}
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{" "}
        provides detailed configuration and troubleshooting guidance.
      </Text>

      <Text as="p" text03>
        <strong>For users:</strong> Please reach out to your system
        administrator, as they can help resolve this issue.
      </Text>

      <Text as="p" text03>
        Still need assistance? Our{" "}
        <a
          className="text-action-link-05"
          href="https://discord.gg/4NA5SbzrWb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord community
        </a>{" "}
        is available to help with any questions or concerns.
      </Text>
    </ErrorPageLayout>
  );
}
