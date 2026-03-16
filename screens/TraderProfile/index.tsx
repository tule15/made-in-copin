import styled from 'styled-components'
import { colors, font, spacing, gradients } from '@/theme/tokens'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Position {
  id: string
  pair: string
  side: 'LONG' | 'SHORT'
  size: number
  entry: number
  current: number
  pnl: number
  leverage: number
  openTime: string
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const TRADER = {
  address: '0xA1b2C3d4E5f6G7h8',
  name: 'Whale.eth',
  protocol: 'GMX',
  pnl30d: 172726,
  roi30d: 84.2,
  winRate: 68.8,
  mdd: -12.4,
  trades: 142,
  avgVolume: 202000,
}

const RECENTLY_VIEWED = [
  { address: '0xE5f6...G7h8', protocol: 'dYdX', amount: 98450, time: '5h ago' },
  { address: '0xI9j0...K1l2', protocol: 'GMX', amount: 54320, time: '12h ago' },
  { address: '0xM3n4...O5p6', protocol: 'Hyperliquid', amount: -12800, time: '1d ago' },
]

const OPEN_POSITIONS: Position[] = [
  { id: '1', pair: 'BTC/USD', side: 'LONG', size: 45000, entry: 64200, current: 67800, pnl: 2527, leverage: 10, openTime: '2h ago' },
  { id: '2', pair: 'ETH/USD', side: 'SHORT', size: 18000, entry: 3480, current: 3290, pnl: 983, leverage: 5, openTime: '6h ago' },
  { id: '3', pair: 'SOL/USD', side: 'LONG', size: 8400, entry: 142, current: 138, pnl: -236, leverage: 8, openTime: '1d ago' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatUSD(value: number): string {
  const abs = Math.abs(value)
  if (abs >= 1_000_000) return `$${(abs / 1_000_000).toFixed(2)}M`
  if (abs >= 1_000) return `$${(abs / 1_000).toFixed(1)}K`
  return `$${abs.toFixed(2)}`
}

// ─── Styled Components ────────────────────────────────────────────────────────

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${colors.bgPage};
  font-family: ${font};
  color: ${colors.textPrimary};
`

// TOPBAR
const Topbar = styled.header`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 ${spacing.xl};
  background: ${colors.bgPage};
  border-bottom: 1px solid ${colors.border};
  flex-shrink: 0;
`

const Logo = styled.span`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -1px;
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-left: ${spacing['3xl']};
  font-size: 12px;
`

const BreadcrumbLink = styled.span`
  color: ${colors.textSecondary};
  cursor: pointer;
  &:hover { color: ${colors.textPrimary}; }
`

const BreadcrumbSep = styled.span`
  color: ${colors.textMuted};
`

const BreadcrumbCurrent = styled.span`
  color: ${colors.primary};
  font-weight: 700;
`

// RECENTLY VIEWED
const RecentlyViewed = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 ${spacing.xl};
  gap: ${spacing.xl};
  background: ${colors.bgPage};
  border-bottom: 1px solid ${colors.border};
  flex-shrink: 0;
  overflow: hidden;
`

const RecentLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: ${colors.textMuted};
  text-transform: uppercase;
  white-space: nowrap;
`

const RecentItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  cursor: pointer;
  flex-shrink: 0;
  &:hover span { color: ${colors.textPrimary}; }
`

const RecentProtocol = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
`

const RecentAddress = styled.span`
  font-size: 12px;
  color: ${colors.textSecondary};
`

const RecentAmount = styled.span<{ positive: boolean }>`
  font-size: 12px;
  font-weight: 700;
  color: ${p => p.positive ? colors.profit : colors.loss};
`

const RecentTime = styled.span`
  font-size: 10px;
  color: ${colors.textMuted};
`

const RecentDivider = styled.div`
  width: 1px;
  height: 20px;
  background: ${colors.border};
  flex-shrink: 0;
`

// TRADER HEADER
const TraderHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};
  padding: ${spacing['3xl']} ${spacing.xl};
  background: ${colors.bgPanel};
  border-bottom: 1px solid ${colors.border};
  flex-shrink: 0;
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.bgPage};
  flex-shrink: 0;
`

const TraderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const TraderName = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${colors.textPrimary};
`

const TraderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
`

const TraderAddress = styled.span`
  font-size: 12px;
  color: ${colors.primary};
  cursor: pointer;
`

const ProtocolBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  background: ${colors.bgRaised};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: 12px;
  color: ${colors.textSecondary};
`

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-left: auto;
`

const GhostBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  height: 32px;
  padding: 0 12px;
  background: transparent;
  border: none;
  border-radius: 4px;
  font-family: ${font};
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textPrimary};
  text-transform: uppercase;
  cursor: pointer;
  &:hover { background: rgba(252,252,253,0.08); }
`

const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  height: 32px;
  padding: 0 16px;
  background: ${colors.primary};
  border: none;
  border-radius: 4px;
  font-family: ${font};
  font-size: 12px;
  font-weight: 700;
  color: ${colors.bgPage};
  text-transform: uppercase;
  cursor: pointer;
  &:hover { background: ${colors.primaryHover}; }
`

// STATS BAR
const StatsBar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 ${spacing.xl};
  background: ${colors.bgPage};
  border-bottom: 1px solid ${colors.border};
  gap: ${spacing['5xl']};
  flex-shrink: 0;
`

const StatCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const StatLabel = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${colors.textMuted};
  text-transform: uppercase;
`

const StatValue = styled.span<{ color?: string }>`
  font-size: 14px;
  font-weight: 700;
  color: ${p => p.color ?? colors.textPrimary};
`

const TimeframeTabs = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const TimeTab = styled.button<{ active?: boolean }>`
  height: 56px;
  padding: 0 16px;
  background: none;
  border: none;
  border-bottom: 2px solid ${p => p.active ? colors.primary : 'transparent'};
  font-family: ${font};
  font-size: 12px;
  font-weight: 700;
  color: ${p => p.active ? colors.textPrimary : colors.textMuted};
  text-transform: uppercase;
  cursor: pointer;
  &:hover { color: ${p => p.active ? colors.textPrimary : colors.textSecondary}; }
`

// MAIN BODY — 3-column layout
const Body = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

// LEFT PANEL
const LeftPanel = styled.aside`
  width: 240px;
  flex-shrink: 0;
  background: ${colors.bgPanel};
  border-right: 1px solid ${colors.border};
  overflow-y: auto;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 ${spacing.xl};
  border-bottom: 1px solid ${colors.border};
`

const SectionTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textPrimary};
  text-transform: uppercase;
`

const RadarPlaceholder = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.border};
  color: ${colors.textMuted};
  font-size: 12px;
`

const MetricList = styled.div`
  padding: ${spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MetricLabel = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
`

const MetricValue = styled.span<{ color?: string }>`
  font-size: 12px;
  font-weight: 700;
  color: ${p => p.color ?? colors.textPrimary};
`

// CENTER PANEL
const CenterPanel = styled.main`
  flex: 1;
  background: ${colors.bgPage};
  border-right: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ChartPlaceholder = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textMuted};
  font-size: 12px;
  border-bottom: 1px solid ${colors.border};
`

// RIGHT PANEL
const RightPanel = styled.aside`
  width: 340px;
  flex-shrink: 0;
  background: ${colors.bgPanel};
  overflow-y: auto;
`

// POSITIONS TABLE (inside right panel)
const PositionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const PTh = styled.th<{ align?: 'left' | 'right' }>`
  height: 36px;
  padding: 0 12px;
  font-size: 10px;
  font-weight: 700;
  color: ${colors.textSecondary};
  text-transform: uppercase;
  text-align: ${p => p.align ?? 'left'};
  background: ${colors.bgRaised};
  border-bottom: 1px solid ${colors.border};
`

const PTr = styled.tr`
  &:hover td { background: rgba(78,174,253,0.08); }
  td { border-bottom: 1px solid rgba(49,56,86,0.5); }
`

const PTd = styled.td<{ align?: 'left' | 'right' }>`
  height: 44px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 400;
  color: ${colors.textPrimary};
  text-align: ${p => p.align ?? 'left'};
`

const SideBadge = styled.span<{ side: 'LONG' | 'SHORT' }>`
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  background: ${p => p.side === 'LONG' ? 'rgba(56,208,96,0.12)' : 'rgba(250,85,71,0.12)'};
  border: 1px solid ${p => p.side === 'LONG' ? colors.profit : colors.loss};
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  color: ${p => p.side === 'LONG' ? colors.profit : colors.loss};
`

const LeverageBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  background: rgba(255,194,75,0.12);
  border: 1px solid ${colors.warningDark};
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  color: ${colors.warning};
`

// ─── Component ────────────────────────────────────────────────────────────────

export default function TraderProfile() {
  return (
    <Page>
      {/* TOPBAR */}
      <Topbar>
        <Logo>COPIN</Logo>
        <Breadcrumb>
          <BreadcrumbLink>Explorer</BreadcrumbLink>
          <BreadcrumbSep>/</BreadcrumbSep>
          <BreadcrumbCurrent>Trader Profile</BreadcrumbCurrent>
        </Breadcrumb>
      </Topbar>

      {/* RECENTLY VIEWED */}
      <RecentlyViewed>
        <RecentLabel>Recently</RecentLabel>
        {RECENTLY_VIEWED.map((item, i) => (
          <>
            {i > 0 && <RecentDivider key={`div-${i}`} />}
            <RecentItem key={item.address}>
              <RecentProtocol>{item.protocol}</RecentProtocol>
              <RecentAddress>{item.address}</RecentAddress>
              <RecentAmount positive={item.amount >= 0}>
                {item.amount >= 0 ? '+' : ''}{formatUSD(item.amount)}
              </RecentAmount>
              <RecentTime>{item.time}</RecentTime>
            </RecentItem>
          </>
        ))}
      </RecentlyViewed>

      {/* TRADER HEADER */}
      <TraderHeader>
        <Avatar>W</Avatar>
        <TraderInfo>
          <TraderName>{TRADER.name}</TraderName>
          <TraderMeta>
            <TraderAddress>0xA1b2C3d4...G7h8</TraderAddress>
            <ProtocolBadge>{TRADER.protocol}</ProtocolBadge>
          </TraderMeta>
        </TraderInfo>
        <ActionRow>
          <GhostBtn>⏰ Alert</GhostBtn>
          <GhostBtn>⇄ Compare</GhostBtn>
          <GhostBtn>📊 Backtest</GhostBtn>
          <PrimaryBtn>Copy Trader</PrimaryBtn>
        </ActionRow>
      </TraderHeader>

      {/* STATS BAR */}
      <StatsBar>
        <StatCell>
          <StatLabel>PNL (30D)</StatLabel>
          <StatValue color={colors.profit}>+{formatUSD(TRADER.pnl30d)}</StatValue>
        </StatCell>
        <StatCell>
          <StatLabel>ROI</StatLabel>
          <StatValue color={colors.profit}>+{TRADER.roi30d}%</StatValue>
        </StatCell>
        <StatCell>
          <StatLabel>Win Rate</StatLabel>
          <StatValue>{TRADER.winRate}%</StatValue>
        </StatCell>
        <StatCell>
          <StatLabel>MDD</StatLabel>
          <StatValue color={colors.loss}>{TRADER.mdd}%</StatValue>
        </StatCell>
        <StatCell>
          <StatLabel>Trades</StatLabel>
          <StatValue>{TRADER.trades}</StatValue>
        </StatCell>
        <StatCell>
          <StatLabel>Avg Vol</StatLabel>
          <StatValue>{formatUSD(TRADER.avgVolume)}</StatValue>
        </StatCell>
        <TimeframeTabs>
          {['1D', '7D', '30D', '60D', 'ALL'].map(t => (
            <TimeTab key={t} active={t === '30D'}>{t}</TimeTab>
          ))}
        </TimeframeTabs>
      </StatsBar>

      {/* 3-COLUMN BODY */}
      <Body>
        {/* LEFT — Radar + Stats */}
        <LeftPanel>
          <SectionHeader>
            <SectionTitle>Performance</SectionTitle>
          </SectionHeader>
          <RadarPlaceholder>[ Radar Chart ]</RadarPlaceholder>
          <MetricList>
            <MetricRow>
              <MetricLabel>Avg ROI / Trade</MetricLabel>
              <MetricValue color={colors.profit}>+20.6%</MetricValue>
            </MetricRow>
            <MetricRow>
              <MetricLabel>Avg Volume</MetricLabel>
              <MetricValue>{formatUSD(TRADER.avgVolume)}</MetricValue>
            </MetricRow>
            <MetricRow>
              <MetricLabel>Avg Leverage</MetricLabel>
              <MetricValue color={colors.warning}>8.4×</MetricValue>
            </MetricRow>
            <MetricRow>
              <MetricLabel>Avg Duration</MetricLabel>
              <MetricValue>14h 22m</MetricValue>
            </MetricRow>
            <MetricRow>
              <MetricLabel>Long / Short</MetricLabel>
              <MetricValue>
                <span style={{ color: colors.profit }}>62%</span>
                <span style={{ color: colors.textMuted }}> / </span>
                <span style={{ color: colors.loss }}>38%</span>
              </MetricValue>
            </MetricRow>
          </MetricList>
        </LeftPanel>

        {/* CENTER — PnL Chart */}
        <CenterPanel>
          <SectionHeader>
            <SectionTitle>PNL Over Time</SectionTitle>
          </SectionHeader>
          <ChartPlaceholder>[ PnL Line Chart — recharts / lightweight-charts ]</ChartPlaceholder>
        </CenterPanel>

        {/* RIGHT — Open Positions */}
        <RightPanel>
          <SectionHeader>
            <SectionTitle>Open Positions</SectionTitle>
          </SectionHeader>
          <PositionTable>
            <thead>
              <tr>
                <PTh>Pair</PTh>
                <PTh>Side</PTh>
                <PTh align="right">Size</PTh>
                <PTh align="right">PNL</PTh>
              </tr>
            </thead>
            <tbody>
              {OPEN_POSITIONS.map(pos => (
                <PTr key={pos.id}>
                  <PTd>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontWeight: 700 }}>{pos.pair}</span>
                      <LeverageBadge>{pos.leverage}×</LeverageBadge>
                    </div>
                  </PTd>
                  <PTd><SideBadge side={pos.side}>{pos.side}</SideBadge></PTd>
                  <PTd align="right" style={{ fontFamily: font }}>
                    {formatUSD(pos.size)}
                  </PTd>
                  <PTd align="right">
                    <span style={{ color: pos.pnl >= 0 ? colors.profit : colors.loss, fontWeight: 700 }}>
                      {pos.pnl >= 0 ? '+' : ''}{formatUSD(pos.pnl)}
                    </span>
                  </PTd>
                </PTr>
              ))}
            </tbody>
          </PositionTable>
        </RightPanel>
      </Body>
    </Page>
  )
}
