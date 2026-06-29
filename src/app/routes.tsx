import { createHashRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { ContractsPage } from "./pages/ContractsPage";
import { FinanceOverviewPage } from "./pages/FinanceOverviewPage";
import { FinanceTransfersPage } from "./pages/FinanceTransfersPage";
import { FinancePaymentRequestsPage } from "./pages/FinancePaymentRequestsPage";
import { FinanceReportsPage } from "./pages/FinanceReportsPage";
import { FinanceSubscriptionsPage } from "./pages/FinanceSubscriptionsPage";
import { FinanceDocumentsPage } from "./pages/FinanceDocumentsPage";
import { FinanceSettingsPage } from "./pages/FinanceSettingsPage";
import { PartnersPage } from "./pages/PartnersPage";
import { GroupsPage } from "./pages/GroupsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { MessagesPage } from "./pages/MessagesPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { ProposalsSentPage } from "./pages/ProposalsSentPage";
import { SurveysPage } from "./pages/SurveysPage";
import { CampaignsPage } from "./pages/CampaignsPage";
import { AdGroupsPage } from "./pages/AdGroupsPage";
import { CreativesPage } from "./pages/CreativesPage";
import { PerformancePage } from "./pages/PerformancePage";
import { PerformanceByPartnerPage } from "./pages/PerformanceByPartnerPage";
import { PerformanceByDayPage } from "./pages/PerformanceByDayPage";
import { PerformanceByAdPage } from "./pages/PerformanceByAdPage";
import { TrendsPage } from "./pages/TrendsPage";
import { CustomReportsPage } from "./pages/CustomReportsPage";
import { TransactionsPage } from "./pages/TransactionsPage";
import { ActionsPage } from "./pages/ActionsPage";
import { PendingPayoutsPage } from "./pages/PendingPayoutsPage";
import { InquiriesPage } from "./pages/InquiriesPage";
import { TestActionsPage } from "./pages/TestActionsPage";
import { ReportsLibraryPage } from "./pages/ReportsLibraryPage";
import { DataLabPage } from "./pages/DataLabPage";
import { ActionExplorerPage } from "./pages/ActionExplorerPage";
import { ContentPage } from "./pages/ContentPage";
import { TemplateTermsPage } from "./pages/TemplateTermsPage";
import { CustomTermsPage } from "./pages/CustomTermsPage";
import { ChangesPage } from "./pages/ChangesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ViewTermsPage } from "./pages/ViewTermsPage";
import { ReportCanvasPage } from "./pages/ReportCanvasPage";
import { PartnerIntelligencePage } from "./pages/PartnerIntelligencePage";
import { MoreReportsPage } from "./pages/MoreReportsPage";
import { DashboardDigestPage } from "./pages/DashboardDigestPage";
import { DashboardRadarPage } from "./pages/DashboardRadarPage";
import { DashboardCommandPage } from "./pages/DashboardCommandPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "dashboard/digest", Component: DashboardDigestPage },
      { path: "dashboard/radar", Component: DashboardRadarPage },
      { path: "dashboard/command", Component: DashboardCommandPage },
      { path: "partners", Component: PartnersPage },
      { path: "partners/groups", Component: GroupsPage },
      { path: "partners/contacts", Component: ContactsPage },
      { path: "partners/messages", Component: MessagesPage },
      { path: "partners/applications", Component: ApplicationsPage },
      { path: "partners/proposals-sent", Component: ProposalsSentPage },
      { path: "partners/surveys", Component: SurveysPage },
      { path: "campaigns", Component: CampaignsPage },
      { path: "campaigns/ad-groups", Component: AdGroupsPage },
      { path: "campaigns/creatives", Component: CreativesPage },
      { path: "reports/performance", Component: PerformancePage },
      { path: "reports/performance/by-partner", Component: PerformanceByPartnerPage },
      { path: "reports/performance/by-day", Component: PerformanceByDayPage },
      { path: "reports/performance/by-ad", Component: PerformanceByAdPage },
      { path: "reports/trends", Component: TrendsPage },
      { path: "reports/custom", Component: CustomReportsPage },
      { path: "reports/overview", Component: ReportsLibraryPage },
      { path: "reports/data-lab", Component: DataLabPage },
      { path: "reports/data-lab/builder", Component: ReportCanvasPage },
      { path: "reports/action-explorer", Component: ActionExplorerPage },
      { path: "reports/partner-intelligence", Component: PartnerIntelligencePage },
      { path: "reports/morereports", Component: MoreReportsPage },
      { path: "transactions", Component: TransactionsPage },
      { path: "transactions/actions", Component: ActionsPage },
      { path: "transactions/pending-payouts", Component: PendingPayoutsPage },
      { path: "transactions/inquiries", Component: InquiriesPage },
      { path: "transactions/test-actions", Component: TestActionsPage },
      { path: "content", Component: ContentPage },
      { path: "contracts/template-terms", Component: TemplateTermsPage },
      { path: "contracts/custom-terms", Component: CustomTermsPage },
      { path: "contracts/viewterms", Component: ViewTermsPage },
      { path: "contracts", Component: ContractsPage },
      { path: "contracts/changes", Component: ChangesPage },
      { path: "finance/overview", Component: FinanceOverviewPage },
      { path: "finance/transfers", Component: FinanceTransfersPage },
      { path: "finance/payment-requests", Component: FinancePaymentRequestsPage },
      { path: "finance/reports", Component: FinanceReportsPage },
      { path: "finance/subscriptions", Component: FinanceSubscriptionsPage },
      { path: "finance/documents", Component: FinanceDocumentsPage },
      { path: "finance/settings", Component: FinanceSettingsPage },
      { path: "reports/data-lab/builder-embed", Component: ReportCanvasPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
  {
    path: "/reports/data-lab/builder-embed",
    Component: ReportCanvasPage
  }
]);