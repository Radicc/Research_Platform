export interface RootObject {
  calendarEvents: CalendarEvents;
  defaultKeyStatistics: DefaultKeyStatistics;
  details: Details;
  earnings: RootObjectEarnings;
  esgScores: EsgScores;
  financialData: FinancialData;
  financialsTemplate: FinancialsTemplate;
  fundOwnership: Ownership;
  insiderHolders: Holders;
  insiderTransactions: InsiderTransactions;
  institutionOwnership: Ownership;
  majorDirectHolders: Holders;
  majorHoldersBreakdown: MajorHoldersBreakdown;
  netSharePurchaseActivity: NetSharePurchaseActivity;
  pageViews: PageViews;
  price: Price;
  quoteType: QuoteType;
  recommendationTrend: RecommendationTrend;
  summaryDetail: SummaryDetail;
  summaryProfile: SummaryProfile;
  symbol: string;
  upgradeDowngradeHistory: UpgradeDowngradeHistory;
}

interface CalendarEvents {
  dividendDate: Details;
  earnings: CalendarEventsEarnings;
  exDividendDate: Details;
  maxAge: number;
}

interface Details {}

interface CalendarEventsEarnings {
  earningsAverage: The52_WeekChange;
  earningsDate: The52_WeekChange[];
  earningsHigh: The52_WeekChange;
  earningsLow: The52_WeekChange;
  revenueAverage: EnterpriseValue;
  revenueHigh: EnterpriseValue;
  revenueLow: EnterpriseValue;
}

interface The52_WeekChange {
  fmt: string;
  raw: number;
}

interface EnterpriseValue {
  fmt: null | string;
  longFmt: string;
  raw: number;
}

interface DefaultKeyStatistics {
  "52WeekChange": The52_WeekChange;
  SandP52WeekChange: The52_WeekChange;
  annualHoldingsTurnover: Details;
  annualReportExpenseRatio: Details;
  beta: The52_WeekChange;
  beta3Year: Details;
  bookValue: The52_WeekChange;
  category: null;
  dateShortInterest: The52_WeekChange;
  earningsQuarterlyGrowth: The52_WeekChange;
  enterpriseToEbitda: The52_WeekChange;
  enterpriseToRevenue: The52_WeekChange;
  enterpriseValue: EnterpriseValue;
  fiveYearAverageReturn: Details;
  floatShares: EnterpriseValue;
  forwardEps: The52_WeekChange;
  forwardPE: The52_WeekChange;
  fundFamily: null;
  fundInceptionDate: Details;
  heldPercentInsiders: The52_WeekChange;
  heldPercentInstitutions: The52_WeekChange;
  impliedSharesOutstanding: EnterpriseValue;
  lastCapGain: Details;
  lastDividendDate: Details;
  lastDividendValue: Details;
  lastFiscalYearEnd: The52_WeekChange;
  lastSplitDate: The52_WeekChange;
  lastSplitFactor: string;
  legalType: null;
  maxAge: number;
  morningStarOverallRating: Details;
  morningStarRiskRating: Details;
  mostRecentQuarter: The52_WeekChange;
  netIncomeToCommon: EnterpriseValue;
  nextFiscalYearEnd: The52_WeekChange;
  pegRatio: The52_WeekChange;
  priceHint: EnterpriseValue;
  priceToBook: The52_WeekChange;
  priceToSalesTrailing12Months: Details;
  profitMargins: The52_WeekChange;
  revenueQuarterlyGrowth: Details;
  sharesOutstanding: EnterpriseValue;
  sharesPercentSharesOut: The52_WeekChange;
  sharesShort: EnterpriseValue;
  sharesShortPreviousMonthDate: The52_WeekChange;
  sharesShortPriorMonth: EnterpriseValue;
  shortPercentOfFloat: The52_WeekChange;
  shortRatio: The52_WeekChange;
  threeYearAverageReturn: Details;
  totalAssets: Details;
  trailingEps: The52_WeekChange;
  yield: Details;
  ytdReturn: Details;
}

interface RootObjectEarnings {
  earningsChart: EarningsChart;
  financialCurrency: string;
  financialsChart: FinancialsChart;
  maxAge: number;
}

interface EarningsChart {
  currentQuarterEstimate: The52_WeekChange;
  currentQuarterEstimateDate: string;
  currentQuarterEstimateYear: number;
  earningsDate: The52_WeekChange[];
  quarterly: EarningsChartQuarterly[];
}

interface EarningsChartQuarterly {
  actual: The52_WeekChange;
  date: string;
  estimate: The52_WeekChange;
}

interface FinancialsChart {
  quarterly: FinancialsChartQuarterly[];
  yearly: Yearly[];
}

interface FinancialsChartQuarterly {
  date: string;
  earnings: EnterpriseValue;
  revenue: EnterpriseValue;
}

export interface Yearly {
  date: number;
  earnings: EnterpriseValue;
  revenue: EnterpriseValue;
}

export interface EsgScores {
  adult: boolean;
  alcoholic: boolean;
  animalTesting: boolean;
  catholic: boolean;
  coal: boolean;
  controversialWeapons: boolean;
  environmentPercentile: null;
  environmentScore: The52_WeekChange;
  esgPerformance: string;
  furLeather: boolean;
  gambling: boolean;
  gmo: boolean;
  governancePercentile: null;
  governanceScore: The52_WeekChange;
  highestControversy: number;
  maxAge: number;
  militaryContract: boolean;
  nuclear: boolean;
  palmOil: boolean;
  peerCount: number;
  peerEnvironmentPerformance: PeerPerformance;
  peerEsgScorePerformance: PeerPerformance;
  peerGovernancePerformance: PeerPerformance;
  peerGroup: string;
  peerHighestControversyPerformance: PeerPerformance;
  peerSocialPerformance: PeerPerformance;
  percentile: The52_WeekChange;
  pesticides: boolean;
  ratingMonth: number;
  ratingYear: number;
  relatedControversy: string[];
  smallArms: boolean;
  socialPercentile: null;
  socialScore: The52_WeekChange;
  tobacco: boolean;
  totalEsg: The52_WeekChange;
}

export interface PeerPerformance {
  avg: number;
  max: number;
  min: number;
}

export interface FinancialData {
  currentPrice: The52_WeekChange;
  currentRatio: The52_WeekChange;
  debtToEquity: The52_WeekChange;
  earningsGrowth: The52_WeekChange;
  ebitda: EnterpriseValue;
  ebitdaMargins: The52_WeekChange;
  financialCurrency: string;
  freeCashflow: EnterpriseValue;
  grossMargins: The52_WeekChange;
  grossProfits: EnterpriseValue;
  maxAge: number;
  numberOfAnalystOpinions: EnterpriseValue;
  operatingCashflow: EnterpriseValue;
  operatingMargins: The52_WeekChange;
  profitMargins: The52_WeekChange;
  quickRatio: The52_WeekChange;
  recommendationKey: string;
  recommendationMean: The52_WeekChange;
  returnOnAssets: The52_WeekChange;
  returnOnEquity: The52_WeekChange;
  revenueGrowth: The52_WeekChange;
  revenuePerShare: The52_WeekChange;
  targetHighPrice: The52_WeekChange;
  targetLowPrice: The52_WeekChange;
  targetMeanPrice: The52_WeekChange;
  targetMedianPrice: The52_WeekChange;
  totalCash: EnterpriseValue;
  totalCashPerShare: The52_WeekChange;
  totalDebt: EnterpriseValue;
  totalRevenue: EnterpriseValue;
}

export interface FinancialsTemplate {
  code: string;
  maxAge: number;
}

export interface Ownership {
  maxAge: number;
  ownershipList: OwnershipList[];
}

export interface OwnershipList {
  maxAge: number;
  organization: string;
  pctChange: The52_WeekChange;
  pctHeld: The52_WeekChange;
  position: EnterpriseValue;
  reportDate: The52_WeekChange;
  value: EnterpriseValue;
}

export interface Holders {
  holders: Holder[];
  maxAge: number;
}

export interface Holder {
  latestTransDate: The52_WeekChange;
  maxAge: number;
  name: string;
  positionDirect?: EnterpriseValue;
  positionDirectDate?: The52_WeekChange;
  positionIndirect?: EnterpriseValue;
  positionIndirectDate?: The52_WeekChange;
  relation: Relation;
  transactionDescription: TransactionDescription;
  url: string;
}

export enum Relation {
  ChiefExecutiveOfficer = "Chief Executive Officer",
  ChiefFinancialOfficer = "Chief Financial Officer",
  Director = "Director",
  Officer = "Officer",
}

export enum TransactionDescription {
  ConversionOfExerciseOfDerivativeSecurity = "Conversion of Exercise of derivative security",
  Sale = "Sale",
}

export interface InsiderTransactions {
  maxAge: number;
  transactions: Transaction[];
}

export interface Transaction {
  filerName: FilerName;
  filerRelation: Relation;
  filerUrl: string;
  maxAge: number;
  moneyText: string;
  ownership: OwnershipEnum;
  shares: EnterpriseValue;
  startDate: The52_WeekChange;
  transactionText: string;
  value?: EnterpriseValue;
}

export enum FilerName {
  BaglinoAndrewD = "BAGLINO ANDREW D",
  DenholmRobynM = "DENHOLM ROBYN M",
  KirkhornZachary = "KIRKHORN ZACHARY",
  MuskElonReeve = "MUSK ELON REEVE",
  MuskKimbalJ = "MUSK KIMBAL J",
  TanejaVaibhav = "TANEJA VAIBHAV",
  WilsonThompsonKathleen = "WILSON - THOMPSON KATHLEEN",
}

export enum OwnershipEnum {
  D = "D",
  I = "I",
}

export interface MajorHoldersBreakdown {
  insidersPercentHeld: The52_WeekChange;
  institutionsCount: EnterpriseValue;
  institutionsFloatPercentHeld: The52_WeekChange;
  institutionsPercentHeld: The52_WeekChange;
  maxAge: number;
}

export interface NetSharePurchaseActivity {
  buyInfoCount: EnterpriseValue;
  buyInfoShares: EnterpriseValue;
  buyPercentInsiderShares: The52_WeekChange;
  maxAge: number;
  netInfoCount: EnterpriseValue;
  netInfoShares: EnterpriseValue;
  netPercentInsiderShares: The52_WeekChange;
  period: string;
  sellInfoCount: EnterpriseValue;
  sellInfoShares: EnterpriseValue;
  sellPercentInsiderShares: The52_WeekChange;
  totalInsiderShares: EnterpriseValue;
}

export interface PageViews {
  longTermTrend: string;
  maxAge: number;
  midTermTrend: string;
  shortTermTrend: string;
}

export interface Price {
  averageDailyVolume10Day: EnterpriseValue;
  averageDailyVolume3Month: EnterpriseValue;
  circulatingSupply: Details;
  currency: string;
  currencySymbol: string;
  exchange: string;
  exchangeDataDelayedBy: number;
  exchangeName: string;
  fromCurrency: null;
  lastMarket: null;
  longName: string;
  marketCap: EnterpriseValue;
  marketState: string;
  maxAge: number;
  openInterest: Details;
  postMarketChange: The52_WeekChange;
  postMarketChangePercent: The52_WeekChange;
  postMarketPrice: The52_WeekChange;
  postMarketSource: string;
  postMarketTime: number;
  preMarketChange: The52_WeekChange;
  preMarketChangePercent: The52_WeekChange;
  preMarketPrice: The52_WeekChange;
  preMarketSource: string;
  preMarketTime: number;
  priceHint: EnterpriseValue;
  quoteSourceName: string;
  quoteType: string;
  regularMarketChange: The52_WeekChange;
  regularMarketChangePercent: The52_WeekChange;
  regularMarketDayHigh: The52_WeekChange;
  regularMarketDayLow: The52_WeekChange;
  regularMarketOpen: The52_WeekChange;
  regularMarketPreviousClose: The52_WeekChange;
  regularMarketPrice: The52_WeekChange;
  regularMarketSource: string;
  regularMarketTime: number;
  regularMarketVolume: EnterpriseValue;
  shortName: string;
  strikePrice: Details;
  symbol: string;
  toCurrency: null;
  underlyingSymbol: null;
  volume24Hr: Details;
  volumeAllCurrencies: Details;
}

export interface QuoteType {
  exchange: string;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  gmtOffSetMilliseconds: string;
  isEsgPopulated: boolean;
  longName: string;
  market: string;
  messageBoardId: string;
  quoteType: string;
  shortName: string;
  symbol: string;
}

export interface RecommendationTrend {
  maxAge: number;
  trend: Trend[];
}

export interface Trend {
  buy: number;
  hold: number;
  period: string;
  sell: number;
  strongBuy: number;
  strongSell: number;
}

export interface SummaryDetail {
  algorithm: null;
  ask: The52_WeekChange;
  askSize: EnterpriseValue;
  averageDailyVolume10Day: EnterpriseValue;
  averageVolume: EnterpriseValue;
  averageVolume10days: EnterpriseValue;
  beta: The52_WeekChange;
  bid: The52_WeekChange;
  bidSize: EnterpriseValue;
  circulatingSupply: Details;
  coinMarketCapLink: null;
  currency: string;
  dayHigh: The52_WeekChange;
  dayLow: The52_WeekChange;
  dividendRate: Details;
  dividendYield: Details;
  exDividendDate: Details;
  expireDate: Details;
  fiftyDayAverage: The52_WeekChange;
  fiftyTwoWeekHigh: The52_WeekChange;
  fiftyTwoWeekLow: The52_WeekChange;
  fiveYearAvgDividendYield: Details;
  forwardPE: The52_WeekChange;
  fromCurrency: null;
  lastMarket: null;
  marketCap: EnterpriseValue;
  maxAge: number;
  maxSupply: Details;
  navPrice: Details;
  open: The52_WeekChange;
  openInterest: Details;
  payoutRatio: The52_WeekChange;
  previousClose: The52_WeekChange;
  priceHint: EnterpriseValue;
  priceToSalesTrailing12Months: The52_WeekChange;
  regularMarketDayHigh: The52_WeekChange;
  regularMarketDayLow: The52_WeekChange;
  regularMarketOpen: The52_WeekChange;
  regularMarketPreviousClose: The52_WeekChange;
  regularMarketVolume: EnterpriseValue;
  startDate: Details;
  strikePrice: Details;
  toCurrency: null;
  totalAssets: Details;
  tradeable: boolean;
  trailingAnnualDividendRate: The52_WeekChange;
  trailingAnnualDividendYield: The52_WeekChange;
  trailingPE: The52_WeekChange;
  twoHundredDayAverage: The52_WeekChange;
  volume: EnterpriseValue;
  volume24Hr: Details;
  volumeAllCurrencies: Details;
  yield: Details;
  ytdReturn: Details;
}

export interface SummaryProfile {
  address1: string;
  city: string;
  companyOfficers: any[];
  country: string;
  fullTimeEmployees: number;
  industry: string;
  industryDisp: string;
  longBusinessSummary: string;
  maxAge: number;
  phone: string;
  sector: string;
  state: string;
  website: string;
  zip: string;
}

export interface UpgradeDowngradeHistory {
  history: History[];
  maxAge: number;
}

export interface History {
  action: Action;
  epochGradeDate: number;
  firm: string;
  fromGrade: Grade;
  toGrade: Grade;
}

export enum Action {
  Down = "down",
  Init = "init",
  Main = "main",
  Reit = "reit",
  Up = "up",
}

export enum Grade {
  Buy = "Buy",
  Empty = "",
  EqualWeight = "Equal-Weight",
  Hold = "Hold",
  InLine = "In-Line",
  MarketOutperform = "Market Outperform",
  MarketPerform = "Market Perform",
  Neutral = "Neutral",
  Outperform = "Outperform",
  Overweight = "Overweight",
  PeerPerform = "Peer Perform",
  Perform = "Perform",
  SectorPerform = "Sector Perform",
  SectorWeight = "Sector Weight",
  Sell = "Sell",
  StrongBuy = "Strong Buy",
  Underperform = "Underperform",
  Underperformer = "Underperformer",
  Underweight = "Underweight",
}
