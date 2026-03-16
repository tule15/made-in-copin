import styled from 'styled-components'
import { colors, font, spacing } from '@/theme/tokens'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Trader {
  rank: number
  address: string
  name?: string
  protocol: string
  pnl: number
  roi: number
  winRate: number
  trades: number
  volume: number
  mdd: number
  lastTrade: string
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const TRADERS: Trader[] = [
  { rank: 1, address: '0xA1b2...C3d4', protocol: 'GMX', pnl: 172726, roi: 84.2, winRate: 68.8, trades: 142, volume: 2340000, mdd: -12.4, lastTrade: '2h ago' },
  { rank: 2, address: '0xE5f6...G7h8', protocol: 'dYdX', pnl: 98450, roi: 61.3, winRate: 72.1, trades: 89, volume: 1870000, mdd: -8.1, lastTrade: '5h ago' },
  { rank: 3, address: '0xI9j0...K1l2', name: 'Whale.eth', protocol: 'Hyperliquid', pnl: 54320, roi: 42.7, winRate: 55.6, trades: 203, volume: 980000, mdd: -21.3, lastTrade: '12h ago' },
  { rank: 4, address: '0xM3n4...O5p6', protocol: 'GMX', pnl: -12800, roi: -9.4, winRate: 44.2, trades: 67, volume: 560000, mdd: -34.7, lastTrade: '1d ago' },
  { rank: 5, address: '0xQ7r8...S9t0', protocol: 'Gains', pnl: 31200, roi: 28.9, winRate: 61.0, trades: 118, volume: 1240000, mdd: -15.2, lastTrade: '3h ago' },
]

const PROTOCOLS = ['All', 'GMX', 'dYdX', 'Hyperliquid', 'Gains', 'Kwenta']
const TIMEFRAMES = ['1D', '7D', '30D', '60D', 'ALL']

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatUSD(value: number): string {
  const abs = Math.abs(value)
  if (abs >= 1_000_000) return `$${(abs / 1_000_000).toFixed(2)}M`
  if (abs >= 1_000) return `$${(abs / 1_000).toFixed(1)}K`
  return `$${abs.toFixed(2)}`
}

function formatPct(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
}

function truncateAddress(address: string): string {
  return address
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
  color: ${colors.textPrimary};
  letter-spacing: -1px;
`

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};
  margin-left: auto;
`

const TopbarLink = styled.a`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.textSecondary};
  text-decoration: none;
  cursor: pointer;
  &:hover { color: ${colors.textPrimary}; }
`

// FILTER BAR
const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};
  height: 48px;
  padding: 0 ${spacing.xl};
  background: ${colors.bgPage};
  border-bottom: 1px solid ${colors.border};
  flex-shrink: 0;
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  height: 32px;
  padding: 0 ${spacing.lg};
  background: ${colors.bgPanel};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  width: 220px;

  input {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    font-family: ${font};
    font-size: 12px;
    color: ${colors.textPrimary};
    width: 100%;
    &::placeholder { color: ${colors.textMuted}; }
  }
`

const PillGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`

const ProtocolPill = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  background: ${p => p.active ? colors.tintPrimary : colors.bgPanel};
  border: 1px solid ${p => p.active ? colors.primary : colors.border};
  border-radius: 4px;
  font-family: ${font};
  font-size: 12px;
  font-weight: ${p => p.active ? 700 : 400};
  color: ${p => p.active ? colors.primary : colors.textSecondary};
  cursor: pointer;
  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
`

const TabGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const TimeTab = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 12px;
  background: none;
  border: none;
  border-bottom: 2px solid ${p => p.active ? colors.primary : 'transparent'};
  font-family: ${font};
  font-size: 12px;
  font-weight: 700;
  color: ${p => p.active ? colors.textPrimary : colors.textMuted};
  cursor: pointer;
  text-transform: uppercase;
  &:hover { color: ${p => p.active ? colors.textPrimary : colors.textSecondary}; }
`

// TABLE
const TableWrapper = styled.div`
  flex: 1;
  overflow: auto;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const THead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
`

const Th = styled.th<{ align?: 'left' | 'right' | 'center' }>`
  height: 40px;
  padding: 0 16px;
  background: ${colors.bgRaised};
  font-family: ${font};
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textSecondary};
  text-transform: uppercase;
  text-align: ${p => p.align ?? 'left'};
  white-space: nowrap;
  border-bottom: 1px solid ${colors.border};
`

const Tr = styled.tr`
  &:hover td { background: rgba(78,174,253,0.08); }
  td { border-bottom: 1px solid rgba(49,56,86,0.5); }
`

const Td = styled.td<{ align?: 'left' | 'right' | 'center' }>`
  height: 48px;
  padding: 0 16px;
  font-family: ${font};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.textPrimary};
  text-align: ${p => p.align ?? 'left'};
  white-space: nowrap;
`

const RankText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.textMuted};
`

const AddressLink = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.primary};
  cursor: pointer;
  &:hover { color: ${colors.primaryHover}; }
`

const ProtocolTag = styled.span`
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  background: ${colors.bgRaised};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: ${colors.textSecondary};
`

const PnlValue = styled.span<{ positive: boolean }>`
  font-weight: 700;
  color: ${p => p.positive ? colors.profit : colors.loss};
`

const PctValue = styled.span<{ positive: boolean }>`
  font-weight: 400;
  color: ${p => p.positive ? colors.profit : colors.loss};
`

const MutedValue = styled.span`
  color: ${colors.textMuted};
  font-size: 12px;
`

// PAGINATION
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 ${spacing.xl};
  background: ${colors.bgPage};
  border-top: 1px solid ${colors.border};
  flex-shrink: 0;
`

const PaginationInfo = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
`

const PaginationButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`

const PageBtn = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${p => p.active ? colors.tintPrimary : 'transparent'};
  border: 1px solid ${p => p.active ? colors.primary : colors.border};
  border-radius: 4px;
  font-family: ${font};
  font-size: 12px;
  font-weight: ${p => p.active ? 700 : 400};
  color: ${p => p.active ? colors.primary : colors.textSecondary};
  cursor: pointer;
  &:hover {
    border-color: ${p => p.active ? colors.primary : colors.textSecondary};
    color: ${p => p.active ? colors.primary : colors.textPrimary};
  }
`

// ─── Component ────────────────────────────────────────────────────────────────

export default function TraderExplorer() {
  return (
    <Page>
      {/* TOPBAR */}
      <Topbar>
        <Logo>COPIN</Logo>
        <TopbarRight>
          <TopbarLink>Explorer</TopbarLink>
          <TopbarLink>Leaderboard</TopbarLink>
          <TopbarLink>Copy Trade</TopbarLink>
        </TopbarRight>
      </Topbar>

      {/* FILTER BAR */}
      <FilterBar>
        <SearchBox>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke={colors.textMuted} strokeWidth="1.5" />
            <path d="m11 11 3 3" stroke={colors.textMuted} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input placeholder="Search address or name..." />
        </SearchBox>

        <PillGroup>
          {PROTOCOLS.map(p => (
            <ProtocolPill key={p} active={p === 'All'}>{p}</ProtocolPill>
          ))}
        </PillGroup>

        <TabGroup>
          {TIMEFRAMES.map(t => (
            <TimeTab key={t} active={t === '30D'}>{t}</TimeTab>
          ))}
        </TabGroup>
      </FilterBar>

      {/* TABLE */}
      <TableWrapper>
        <Table>
          <THead>
            <tr>
              <Th style={{ width: 48 }}>#</Th>
              <Th>TRADER</Th>
              <Th>PROTOCOL</Th>
              <Th align="right">PNL</Th>
              <Th align="right">ROI</Th>
              <Th align="right">WIN RATE</Th>
              <Th align="right">TRADES</Th>
              <Th align="right">VOLUME</Th>
              <Th align="right">MDD</Th>
              <Th align="right">LAST TRADE</Th>
            </tr>
          </THead>
          <tbody>
            {TRADERS.map(trader => (
              <Tr key={trader.rank}>
                <Td><RankText>{trader.rank}</RankText></Td>
                <Td>
                  <AddressLink>
                    {trader.name ?? truncateAddress(trader.address)}
                  </AddressLink>
                </Td>
                <Td><ProtocolTag>{trader.protocol}</ProtocolTag></Td>
                <Td align="right">
                  <PnlValue positive={trader.pnl >= 0}>
                    {trader.pnl >= 0 ? '+' : ''}{formatUSD(trader.pnl)}
                  </PnlValue>
                </Td>
                <Td align="right">
                  <PctValue positive={trader.roi >= 0}>
                    {formatPct(trader.roi)}
                  </PctValue>
                </Td>
                <Td align="right">{trader.winRate.toFixed(1)}%</Td>
                <Td align="right">{trader.trades}</Td>
                <Td align="right">{formatUSD(trader.volume)}</Td>
                <Td align="right">
                  <PctValue positive={false}>{trader.mdd.toFixed(1)}%</PctValue>
                </Td>
                <Td align="right"><MutedValue>{trader.lastTrade}</MutedValue></Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      {/* PAGINATION */}
      <Pagination>
        <PaginationInfo>Showing 1–20 of 1,482 traders</PaginationInfo>
        <PaginationButtons>
          <PageBtn>‹</PageBtn>
          <PageBtn active>1</PageBtn>
          <PageBtn>2</PageBtn>
          <PageBtn>3</PageBtn>
          <PageBtn>›</PageBtn>
        </PaginationButtons>
      </Pagination>
    </Page>
  )
}
